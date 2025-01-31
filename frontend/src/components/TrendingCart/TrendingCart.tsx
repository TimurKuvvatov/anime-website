import { FC } from 'react';
import styles from './TrendingCart.module.scss';
import { INews } from '../../models/INews';

const TrendingCart: FC<INews> = ({ imageUrl, title, content }) => {
    return (
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={styles.cart}>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default TrendingCart;
