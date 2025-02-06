import styles from './Filter.module.scss';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleGenre } from '../../redux/slices/genreSlice';

import { genres } from '../../data/data';
import { IGenre } from '../../models/IGenre';

import { useCallback } from 'react';
import ViewModeList from '../ViewModeList/ViewModeList';

const Filter = () => {
    const dispatch = useAppDispatch();
    const activeGenres = useAppSelector((state) => state.genre.genres);

    const isActive = useCallback(
        (genre: IGenre) => {
            return activeGenres.some((activeGenre) => activeGenre.id === genre.id);
        },
        [activeGenres],
    );

    return (
        <div className={styles.filter}>
            <h3>Жанры</h3>
            <ul className={styles.genres}>
                {genres.map((genre) => (
                    <li
                        className={isActive(genre) ? `${styles.active}` : ''}
                        key={genre.id}
                        onClick={() => dispatch(toggleGenre(genre))}
                    >
                        {genre.russian}
                    </li>
                ))}
            </ul>
            <h3>Отображение</h3>
            <ViewModeList />
        </div>
    );
};

export default Filter;
