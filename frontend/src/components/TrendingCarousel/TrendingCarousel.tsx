import { FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import styles from './TrendingCarousel.module.scss';

import TrendingCart from '../TrendingCart/TrendingCart';
import { Navigation } from 'swiper/modules';
import { setActiveNews } from '../../redux/slices/activeNewsSlice';
import { newsApi } from '../../services/newsApi';
import { useAppDispatch } from '../../redux/hooks';

const TrendingCarousel: FC = () => {
    const { data: news } = newsApi.useGetNewsQuery();
    const dispatch = useAppDispatch();
    const handleClickSlide = (newsId: number) => {
        dispatch(setActiveNews(newsId));
    };

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.realIndex;
        if (news) {
            const currentSlide = news[currentIndex];
            if (currentSlide) {
                dispatch(setActiveNews(currentSlide.id));
            }
        }
    };

    return (
        <div className={styles.swiper}>
            <Swiper
                modules={[Navigation]}
                pagination={{ clickable: true }}
                slidesPerView={4}
                navigation
                loop={true}
                onSlideChange={handleSlideChange}
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
        </div>
    );
};

export default TrendingCarousel;
