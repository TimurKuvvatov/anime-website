import { FC } from 'react';
import styles from './AnimeInfo.module.scss';

interface AnimeInfoProps {
    kind: string;
    episodes: number;
    status: string;
    rating: string;
    score: string;
}

const AnimeInfo: FC<AnimeInfoProps> = ({ kind, episodes, status, rating, score }) => {
    return (
        <ul className={styles.list}>
            <li>
                Оценка: <span>{score}/10</span>
            </li>
            <li>
                Тип: <span>{kind}</span>{' '}
            </li>
            <li>
                Количество эпизодов: <span>{episodes}</span>
            </li>
            <li>
                Статус: <span>{status}</span>
            </li>
            <li>
                Рейтинг: <span>{rating}</span>
            </li>
        </ul>
    );
};

export default AnimeInfo;
