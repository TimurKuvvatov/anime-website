import { FC } from 'react';
import AnimeDetail from '../components/AnimeDetail/AnimeDetail';
import { useParams } from 'react-router-dom';
import { animeApi } from '../services/animeApi';
import AnimePlayer from '../components/AnimePlayer/AnimePlayer';
import RelatedContent from '../components/RelatedContent/RelatedContent';

const AnimePage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: anime } = animeApi.useGetAnimeQuery(Number(id));
    const { data: relatedAnimes = [] } = animeApi.useGetAnimeRelationsQuery(Number(id));

    if (!anime) {
        return null;
    }

    return (
        <>
            <div className="container">
                <AnimeDetail anime={anime} />
                <RelatedContent animes={relatedAnimes} />
            </div>
            <AnimePlayer id={anime.id} />
        </>
    );
};

export default AnimePage;
