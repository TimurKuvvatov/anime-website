import { FC } from 'react';
import styles from './Trending.module.scss';
import TrendingNews from '../TrendingNews/TrendingNews';
import TrendingCarousel from '../TrendingCarousel/TrendingCarousel';
import { newsApi } from '../../services/newsApi';
import { useAppSelector } from '../../redux/hooks';

const Trending: FC = () => {
    const { data: news, isLoading, error } = newsApi.useGetNewsQuery();
    const activeNews = useAppSelector((state) => state.activeNews.activeNewsId);

    if (isLoading) {
        return <div>Загрузка новостей...</div>;
    }

    if (error) {
        console.error('Ошибка при загрузке новостей:', error);
        return <div>Ошибка при загрузке новостей</div>;
    }

    if (!news || news.length === 0) {
        return <div>Нет доступных новостей.</div>;
    }

    return (
        <div
            style={{ backgroundImage: `url(${news[activeNews - 1].imageUrl})` }}
            className={styles.trending}
        >
            <div className={styles.content}>
                <TrendingNews news={news[activeNews - 1]} />
                <TrendingCarousel />
            </div>
        </div>
    );
};

export default Trending;
