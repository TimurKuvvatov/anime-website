import { FC } from 'react';
import { animeApi } from '../../services/animeApi';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import styles from './Hits.module.scss';
import 'swiper/swiper-bundle.css';

import CartAnime from '../CartAnime/CartAnime';

const Hits: FC = () => {
    const { data: animes } = animeApi.useGetAllAnimesQuery({ limit: 20, order: 'popularity' });
    return (
        <div className={styles.hits}>
            <h1>ПОПУЛЯРНЫЕ</h1>
            <div className={styles.carts}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    slidesPerView={6}
                >
                    {animes &&
                        animes.map((anime) => (
                            <SwiperSlide key={anime.id}>
                                <CartAnime {...anime} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Hits;
