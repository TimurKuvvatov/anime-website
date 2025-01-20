import styles from './TrendingNews.module.scss';
import { INews } from '../../models/INews';
import { FC } from 'react';

interface TrendingNewsProps {
    news: INews;
}

const TrendingNews: FC<TrendingNewsProps> = ({ news }) => {
    return (
        <div className={styles.news}>
            <h2>{news.title} </h2>
            <p>{news.content}</p>
            <button>ЧИТАТЬ ДАЛЕЕ</button>
        </div>
    );
};

export default TrendingNews;
