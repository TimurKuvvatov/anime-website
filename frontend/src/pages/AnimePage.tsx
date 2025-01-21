import { FC } from 'react';
import AnimeDetail from '../components/AnimeDetail/AnimeDetail';
import { useParams } from 'react-router-dom';
import { animeApi } from '../services/animeApi';

const AnimePage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: anime } = animeApi.useGetAnimeQuery(Number(id));
    if (!anime) {
        return null;
    }
    return <AnimeDetail anime={anime} />;
};

export default AnimePage;
