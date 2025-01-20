import { FC } from 'react';
import styles from './TrendingCart.module.scss';
import { INews } from '../../models/INews';

const TrendingCart: FC<INews> = ({ imageUrl, title, id, content }) => {
    return (
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={styles.cart}>
            <div className={styles.info}>
                <h3>
                    {id}. {title}
                </h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default TrendingCart;
