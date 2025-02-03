import { FC } from 'react';
import { IAnimeRelations } from '../../models/IAnimeRelation';
import styles from './RelatedCard.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants';

interface RelatedCardProps {
    anime: IAnimeRelations;
}

const RelatedCard: FC<RelatedCardProps> = ({ anime }) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/animes/${id}`);
    };

    return (
        <div onClick={() => handleClick(anime.anime.id)} className={styles.anime}>
            <Link to={`/animes/${anime.anime.id}`} title={anime.anime.russian}>
                {anime.anime.russian}
            </Link>
            <div className={styles.content}>
                <div
                    style={{ backgroundImage: `url(${BASE_URL}${anime.anime.image.original})` }}
                    className={styles.image}
                ></div>
                <div className={styles.info}>
                    <span>{anime.relation_russian}</span>
                    <span>{anime.anime.episodes} зпизод.</span>
                    <span className={styles.kind}>{anime.anime.kind}</span>
                </div>
            </div>
        </div>
    );
};

export default RelatedCard;
