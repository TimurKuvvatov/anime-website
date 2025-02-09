import { FC, useEffect, useRef, useState } from 'react';
import AnimeList from '../components/AnimeList/AnimeList';
import { animeApi } from '../services/animeApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setPage } from '../redux/slices/pageSlice';
import { IAnimeCard } from '../models/IAnimeCard';

const AnimeListPage: FC = () => {
    const dispatch = useAppDispatch();
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
