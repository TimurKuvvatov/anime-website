import { FC } from 'react';
import styles from './AnimePlayer.module.scss';

interface AnimePlayerProps {
    id: number;
}

const AnimePlayer: FC<AnimePlayerProps> = ({ id }) => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <iframe
                    className={styles.player}
                    src={`//kodik.cc/find-player?shikimoriID=${id}&types=anime,anime-serial`}
                    width="100%"
                    height="600px"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay *; fullscreen *"
                ></iframe>
            </div>
        </div>
    );
};

export default AnimePlayer;
