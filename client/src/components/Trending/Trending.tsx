import { FC } from 'react';
import styles from './Trending.module.scss';
import TrendingNews from '../TrendingNews/TrendingNews';
import TrendingCarousel from '../TrendingCarousel/TrendingCarousel';
import { newsApi } from '../../services/newsApi';
import { useAppSelector } from '../../redux/hooks';

const Trending: FC = () => {
    const { data: news, error } = newsApi.useGetNewsQuery();
    const activeNews = useAppSelector((state) => state.activeNews.activeNewsId);

    if (error) {
        console.error('ОШИБКА', error);
    }

    return (
        <div
            style={{ backgroundImage: `url(${news && news[activeNews - 1].imageUrl})` }}
            className={styles.trending}
        >
            <div className={styles.content}>
                {news && <TrendingNews news={news[activeNews - 1]} />}
                <TrendingCarousel />
            </div>
        </div>
    );
};

export default Trending;
