import styles from './AnimeDetail.module.scss';
import { IAnime } from '../../models/IAnime';
import { FC } from 'react';
import { BASE_URL } from '../../constants';
import AnimeInfo from '../AnimeInfo/AnimeInfo';

interface AnimeDetailProps {
    anime: IAnime | undefined;
}

const AnimeDetail: FC<AnimeDetailProps> = ({ anime }) => {
    return (
        <div className="container">
            <div className={styles.details}>
                <div
                    style={{ background: `url(${BASE_URL}${anime?.image.original})` }}
                    className={styles.poster}
                ></div>
                <div className={styles.info}>
                    <h2>{anime?.russian}</h2>
                    {anime && (
                        <AnimeInfo
                            kind={anime.kind}
                            episodes={anime.episodes}
                            status={anime.status}
                            rating={anime.rating}
                            score={anime.score}
                        ></AnimeInfo>
                    )}
                    <div className={styles.description}>{anime?.description}</div>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetail;
