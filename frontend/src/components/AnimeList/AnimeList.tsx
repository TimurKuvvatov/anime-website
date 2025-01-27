import { FC } from 'react';
import { IAnimeCart } from '../../models/IAnimeCart';
import styles from './AnimeList.module.scss';

import CartAnime from '../CartAnime/CartAnime';
import { useNavigate } from 'react-router-dom';
import SearchAnime from '../SearchAnime/SearchAnime';

interface AnimeListProps {
    animes: IAnimeCart[];
}

const AnimeList: FC<AnimeListProps> = ({ animes }) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/animes/${id}`);
    };
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <SearchAnime />
                {animes.map((anime) => (
                    <li className={styles.anime}>
                        <CartAnime {...anime} />
                        <div className={styles.info}>
                            <h3 onClick={() => handleClick(anime.id)}>{anime.russian}</h3>
                            <h2>{anime.name}</h2>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={styles.filter}></div>
        </div>
    );
};

export default AnimeList;
