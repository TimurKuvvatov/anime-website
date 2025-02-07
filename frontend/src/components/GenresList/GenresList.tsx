import styles from './GenresList.module.scss';

import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleGenre } from '../../redux/slices/genreSlice';
import { IGenre } from '../../models/IGenre';
import { genres } from '../../data/genres';

const GenresList = () => {
    const dispatch = useAppDispatch();
    const activeGenres = useAppSelector((state) => state.genre.genres);

    const isActive = useCallback(
        (genre: IGenre) => {
            return activeGenres.some((activeGenre) => activeGenre.id === genre.id);
        },
        [activeGenres],
    );
    return (
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
    );
};

export default GenresList;
