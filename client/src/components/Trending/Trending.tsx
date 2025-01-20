import { FC } from 'react';
import styles from './Trending.module.scss';
import TrendingNews from '../TrendingNews/TrendingNews';
import TrendingCarousel from '../TrendingCarousel/TrendingCarousel';
import { newsApi } from '../../services/newsApi';

const Trending: FC = () => {
    const { data: news, isLoading, error } = newsApi.useGetNewsQuery();

    if (isLoading) {
        return <div>Загрузка новостей...</div>;
    }

    if (error) {
        console.error('Ошибка при загрузке новостей:', error); // Логируем ошибку
        return <div>Ошибка при загрузке новостей</div>; // Отображаем сообщение об ошибке
    }

    if (!news || news.length === 0) {
        return <div>Нет доступных новостей.</div>; // Отображаем сообщение, если новостей нет
    }

    return (
        <div className={styles.trending}>
            <div className={styles.content}>
                <TrendingNews news={news[0]} />
                <TrendingCarousel />
            </div>
        </div>
    );
};

export default Trending;
