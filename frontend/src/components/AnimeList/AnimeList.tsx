import { FC } from 'react';
import { IAnimeCard } from '../../models/IAnimeCard';
import styles from './AnimeList.module.scss';

import CardAnime from '../CardAnime/CardAnime';
import { useNavigate } from 'react-router-dom';
import SearchAnime from '../Search/Search';
import useScroll from '../../hooks/useScroll';
import Filter from '../Filter/Filter';
import { useAppSelector } from '../../redux/hooks';
import { BASE_URL } from '../../constants';

interface AnimeListProps {
    animes: IAnimeCard[];
    loadMoreAnimes: () => void;
}

const AnimeList: FC<AnimeListProps> = ({ animes, loadMoreAnimes }) => {
    const navigate = useNavigate();
    const viewMode = useAppSelector((state) => state.viewMode.value);

    const handleClick = (id: number) => {
        navigate(`/animes/${id}`);
    };

    const lastItemRef = useScroll({ callback: loadMoreAnimes });

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <SearchAnime />
                {animes.length > 0 ? (
                    <ul className={viewMode === 'list' ? styles.list : styles.grid}>
                        {animes.map((anime, index) => (
                            <li
                                key={anime.id}
                                ref={index === animes.length - 1 ? lastItemRef : null}
                                className={styles.anime}
                                onClick={() => handleClick(anime.id)}
                            >
                                {viewMode === 'list' ? (
                                    <>
                                        <img
                                            src={BASE_URL + anime.image.preview}
                                            alt={anime.russian}
                                        />
                                        <div className={styles.info}>
                                            <h3>{anime.russian}</h3>
                                            <h2>{anime.name}</h2>
                                            <span>Эпизодов: {anime.episodes}</span>
                                            <span>{anime.kind}</span>
                                            <span>{anime.status}</span>
                                        </div>
                                    </>
                                ) : (
                                    <CardAnime {...anime} />
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h1>ПО ВАШЕМУ ЗАПРОСУ НИЧЕГО НЕ НАЙДЕНО</h1>
                )}
            </div>
            <Filter />
        </section>
    );
};

export default AnimeList;
