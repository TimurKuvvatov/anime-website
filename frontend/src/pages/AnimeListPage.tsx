import { FC, useEffect, useRef, useState } from 'react';
import AnimeList from '../components/AnimeList/AnimeList';
import { animeApi } from '../services/animeApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setPage } from '../redux/slices/pageSlice';
import { IAnimeCard } from '../models/IAnimeCard';

const AnimeListPage: FC = () => {
    const dispatch = useAppDispatch();
    const order = useAppSelector((state) => state.order.order);
    const search = useAppSelector((state) => state.search.value);
    const page = useAppSelector((state) => state.page.value);
    const genres = useAppSelector((state) => state.genre.genres);
    const genresId = genres.map((genre) => genre.id);
    const countGenresId = useRef<number>(genresId.length);

    const [hasMore, setHasMore] = useState<boolean>(true);

    const { data: animes = [], isFetching, isSuccess } = animeApi.useGetAllAnimesQuery(
        {
            limit: 20,
            order,
            search,
            page,
            genre: genresId,
        },
        { skip: page !== 1 && countGenresId.current !== genresId.length },
    );

    const [initialAnimes, setInitialAnimes] = useState<IAnimeCard[]>([]);

    useEffect(() => {
        if (countGenresId.current !== genresId.length) {
            if (!isFetching && page !== 1) {
                dispatch(setPage(1));
            }
            setInitialAnimes(animes);
            console.log('Поменялись жанры');
            window.scrollTo({ top: 0 });
            countGenresId.current = genresId.length;
        }
    }, [genresId, isFetching, page]);

    useEffect(() => {
        if (animes.length > 0 && !isFetching) {
            setInitialAnimes((prev) => (page > 1 ? [...prev, ...animes] : animes));
            console.log('Лист аниме подгружается');
            setHasMore(true);
        }
        else if (animes.length === 0 && isSuccess) {
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
