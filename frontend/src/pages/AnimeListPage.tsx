import { FC, useEffect, useRef, useState } from 'react';
import AnimeList from '../components/AnimeList/AnimeList';
import { animeApi } from '../services/animeApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setPage } from '../redux/slices/pageSlice';
import { IAnimeCart } from '../models/IAnimeCart';

const AnimeListPage: FC = () => {
    const dispatch = useAppDispatch();
    const order = useAppSelector((state) => state.order.order);
    const search = useAppSelector((state) => state.search.value);
    const page = useAppSelector((state) => state.page.value);
    const genres = useAppSelector((state) => state.genre.genres);
    const genresId = genres.map((genre) => genre.id);
    const countGenresId = useRef<number>(genresId.length);
    const { data: animes = [], isFetching } = animeApi.useGetAllAnimesQuery({
        limit: 20,
        order,
        search,
        page,
        genre: genresId,
    });

    const [initialAnimes, setInitialAnimes] = useState<IAnimeCart[]>([]);

    useEffect(() => {
        if (countGenresId.current !== genresId.length) {
            if (!isFetching) {
                dispatch(setPage(1));
                setInitialAnimes(animes);
                console.log('Поменялись жанры');
            }
            if (page !== 1) {
                dispatch(setPage(1));
            }
            window.scrollTo({
                top: 0,
            });
            countGenresId.current = genresId.length;
        }
        if (animes.length === 0) {
            setInitialAnimes(animes);
        }
    }, [genresId]);

    useEffect(() => {
        if (animes.length > 0 && !isFetching) {
            setInitialAnimes((prev) => (page > 1 ? [...prev, ...animes] : animes));
            console.log('Лист аниме подгружается');
        }
    }, [animes, page, isFetching]);

    const loadMoreAnimes = () => {
        if (!isFetching) {
            dispatch(setPage(page + 1));
            console.log('Меняется страница loadMoreAnimes');
        }
    };

    return <AnimeList animes={initialAnimes} loadMoreAnimes={loadMoreAnimes} />;
};

export default AnimeListPage;
