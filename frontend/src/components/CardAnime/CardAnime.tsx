import { FC } from 'react';
import { IAnimeCard } from '../../models/IAnimeCard';
import styles from './CardAnime.module.scss';
import { BASE_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

const CardAnime: FC<IAnimeCard> = ({ russian, id, image, kind, score, status, episodes }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/animes/${id}`);
    };

    return (
        <div
            onClick={handleClick}
            style={{ background: `url(${BASE_URL}${image.original})` }}
            className={styles.card}
        >
            <div className={styles.content}>
                <h3>{russian}</h3>
                <p>Тип: {kind}</p>
                <p>Рейтинг: {score}</p>
                <p>Кол-во эпизодов: {episodes}</p>
                <p>Статус: {status}</p>
            </div>
        </div>
    );
};

export default CardAnime;
