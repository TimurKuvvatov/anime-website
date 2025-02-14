import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { animeApi } from '../services/animeApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setPage } from '../redux/slices/pageSlice';

import { IAnimeCard } from '../models/IAnimeCard';
import { IGenre } from '../models/IGenre';

import AnimeList from '../components/AnimeList/AnimeList';
import { setOrder } from '../redux/slices/orderSlice';
import { setSearch } from '../redux/slices/searchSlice';
import { toggleKinds } from '../redux/slices/kindsSlice';
import { IKind } from '../models/IKind';
import { toggleGenre } from '../redux/slices/genreSlice';
import { genres as dataGenres } from '../data/genres';

const AnimeListPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const search = useAppSelector((state) => state.search.value);
    const page = useAppSelector((state) => state.page.value);

    const order = useAppSelector((state) => state.order.order);
    const prevOrder = useRef<string>(order);

    const kinds = useAppSelector((state) => state.kinds.kinds);
    const kindsNames = kinds.map((kind) => kind.name);
    const prevKindNames = useRef<number>(kindsNames.length);

    const genres = useAppSelector((state) => state.genre.genres);
    const genresId = genres.map((genre) => genre.id);
    const prevGenresId = useRef<number>(genresId.length);

    const [hasMore, setHasMore] = useState<boolean>(true);

    const buildAnimeUrl = useCallback(
        (order: string, genres: IGenre[], kind: string[], search: string) => {
            const params = new URLSearchParams();
            if (order) params.append('order', order);
            if (search) params.append('search', search);
            if (genres && genres.length > 0) {
                genres.forEach((genre) => params.append('genre', genre.name));
            }
            if (kinds && kinds.length > 0) {
                kinds.forEach((kind) => params.append('kind', kind.name));
            }
            return `?${params.toString()}`;
        },
        [order, genres, kinds, search],
    );

    const apiUrl = useMemo(() => {
        return buildAnimeUrl(order, genres, kindsNames, search);
    }, [order, genres, kindsNames, search]);

    const {
        data: animes = [],
        isFetching,
        isSuccess,
    } = animeApi.useGetAllAnimesQuery(
        {
            limit: 20,
            order,
            search,
            page,
            genre: genresId,
            kind: kindsNames,
        },
        {
            skip:
                page !== 1 &&
                (prevGenresId.current !== genresId.length || prevOrder.current !== order),
        },
    );

    const [initialAnimes, setInitialAnimes] = useState<IAnimeCard[]>([]);

    const paramsFromUrl = useCallback(() => {
        const orderFromUrl = searchParams.get('order') || 'popularity';
        const genreFromUrl = searchParams.getAll('genre') || '';
        const kindFromUrl = searchParams.getAll('kind') || '';
        const searchFromUrl = searchParams.get('search') || '';

        if (orderFromUrl !== order) {
            dispatch(setOrder(orderFromUrl));
        }
        if (searchFromUrl !== search) {
            dispatch(setSearch(searchFromUrl));
        }
        const kindsFromUrl: IKind[] = kindFromUrl
            .map((name) => {
                const kind = kinds.find((k) => k.name === name);
                return kind ? kind : { name: name, russian: '' };
            })
            .filter((kind) => kind !== undefined);

        kindsFromUrl.forEach((kind) => dispatch(toggleKinds(kind)));
        const genresFromUrl = genreFromUrl
            .map((name) => {
                const genre = dataGenres.findIndex((genreEl) => genreEl.name === name);
                return dataGenres[genre];
            })
            .filter((genre) => genre !== undefined);
        genresFromUrl.forEach((genre) => dispatch(toggleGenre(genre)));
    }, [order, search, kinds, genres]);

    useEffect(() => {
        paramsFromUrl();
    }, []);

    useEffect(() => {
        if (
            prevGenresId.current !== genresId.length ||
            prevOrder.current !== order ||
            prevKindNames.current !== kindsNames.length
        ) {
            if (!isFetching && page !== 1) {
                dispatch(setPage(1));
            }
            setInitialAnimes(animes);
            console.log('Изменились параметры');
            window.scrollTo({ top: 0 });
            prevGenresId.current = genresId.length;
            prevKindNames.current = kindsNames.length;
            prevOrder.current = order;
            navigate(apiUrl, { replace: true });
        }
    }, [genresId, isFetching, page, order, kindsNames, dispatch]);

    useEffect(() => {
        if (animes.length > 0 && !isFetching) {
            setInitialAnimes((prev) => (page > 1 ? [...prev, ...animes] : animes));
            console.log('Лист аниме подгружается');

            setHasMore(true);
        } else if (animes.length === 0 && isSuccess) {
            setHasMore(false);
        }
    }, [animes, page, isFetching, isSuccess]);

    const loadMoreAnimes = () => {
        if (!isFetching && hasMore) {
            dispatch(setPage(page + 1));
            console.log('Меняется страница loadMoreAnimes');
        }
    };

    return <AnimeList animes={initialAnimes} loadMoreAnimes={loadMoreAnimes} />;
};

export default AnimeListPage;
