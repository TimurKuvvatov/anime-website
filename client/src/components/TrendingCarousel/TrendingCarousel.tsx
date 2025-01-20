import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import styles from './TrendingCarousel.module.scss';

import TrendingCart from '../TrendingCart/TrendingCart';
import { Navigation } from 'swiper/modules';
import { setActiveNews } from '../../redux/slices/activeNewsSlice';
import { newsApi } from '../../services/newsApi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const TrendingCarousel: React.FC = () => {
    const { data: news } = newsApi.useGetNewsQuery();
    const dispatch = useAppDispatch();
    const activeNews = useAppSelector((state) => state.activeNews.activeNewsId);
    const handleClickSlide = (newsId: number) => {
        dispatch(setActiveNews(newsId));
    };
    return (
        <div className={styles.swiper}>
            <Swiper
                modules={[Navigation]}
                pagination={{ clickable: true }}
                slidesPerView={3.5}
                navigation
                loop={true}
            >
                {news &&
                    news.map((newsElem) => (
                        <SwiperSlide
                            onClick={() => handleClickSlide(newsElem.id)}
                            key={newsElem.id}
                        >
                            <TrendingCart {...newsElem}></TrendingCart>
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div>
                <h4>Текущий активный слайд: {activeNews}</h4>
            </div>
        </div>
    );
};

export default TrendingCarousel;
