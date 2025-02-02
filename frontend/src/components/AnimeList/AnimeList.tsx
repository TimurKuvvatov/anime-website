import { FC } from 'react';
import { IAnimeCart } from '../../models/IAnimeCart';
import styles from './AnimeList.module.scss';

import CartAnime from '../CartAnime/CartAnime';
import { useNavigate } from 'react-router-dom';
import SearchAnime from '../Search/Search';
import useScroll from '../../hooks/useScroll';
import Filter from '../Filter/Filter';

interface AnimeListProps {
    animes: IAnimeCart[];
    loadMoreAnimes: () => void;
}

const AnimeList: FC<AnimeListProps> = ({ animes, loadMoreAnimes }) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/animes/${id}`);
    };

    const lastItemRef = useScroll({ callback: loadMoreAnimes });

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <SearchAnime />
                {animes.length > 0 ? (
                    animes.map((anime, index) => (
                        <li
                            key={anime.id}
                            ref={index === animes.length - 1 ? lastItemRef : null}
                            className={styles.anime}
                        >
                            <CartAnime {...anime} />
                            <div className={styles.info}>
                                <h3 onClick={() => handleClick(anime.id)}>{anime.russian}</h3>
                                <h2>{anime.name}</h2>
                            </div>
                        </li>
                    ))
                ) : (
                    <h1>ПО ВАШЕМУ ЗАПРОСУ НИЧЕГО НЕ НАЙДЕНО</h1>
                )}
            </ul>
            <Filter />
        </div>
    );
};

export default AnimeList;
