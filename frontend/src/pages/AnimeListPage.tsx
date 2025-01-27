import { FC } from 'react';
import AnimeList from '../components/AnimeList/AnimeList';
import { animeApi } from '../services/animeApi';
import { useAppSelector } from '../redux/hooks';

const AnimeListPage: FC = () => {
    const order = useAppSelector((state) => state.order.order);
    const value = useAppSelector((state) => state.search.value);
    const { data: animes = [] } = animeApi.useGetAllAnimesQuery({
        limit: 20,
        order,
        search: value,
    });
    return <AnimeList animes={animes} />;
};

export default AnimeListPage;
