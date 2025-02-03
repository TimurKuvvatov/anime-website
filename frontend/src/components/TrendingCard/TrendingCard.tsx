import { FC } from 'react';
import styles from './TrendingCard.module.scss';
import { INews } from '../../models/INews';

const TrendingCard: FC<INews> = ({ imageUrl, title, content }) => {
    return (
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={styles.card}>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default TrendingCard;
