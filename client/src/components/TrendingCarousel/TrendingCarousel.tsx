import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import styles from './TrendingCarousel.module.scss';

import TrendingCart from '../TrendingCart/TrendingCart';
import { Navigation } from 'swiper/modules';
const TrendingCarousel: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const handleSlideChange = (swiper: any) => {
        setActiveSlide(swiper.realIndex);
    };

    const items = ['asdasd', 'asdasdasd', '1234', '00100', '1232'];

    return (
        <div className={styles.swiper}>
            <Swiper
                modules={[Navigation]}
                pagination={{ clickable: true }}
                slidesPerView={3.5}
                navigation
                loop={true}
                onSlideChange={handleSlideChange}
            >
                {items.map((item) => (
                    <SwiperSlide key={item}>
                        <TrendingCart></TrendingCart>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <h4>Текущий активный слайд: {activeSlide + 1}</h4>
            </div>
        </div>
    );
};

export default TrendingCarousel;
