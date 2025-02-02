import { genres } from '../../data/data';
import { IGenre } from '../../models/IGenre';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleGenre } from '../../redux/slices/genreSlice';
import styles from './Filter.module.scss';

const Filter = () => {
    const dispatch = useAppDispatch();
    const activeGenres = useAppSelector((state) => state.genre.genres);

    const handleGenreClick = (genre: IGenre) => {
        dispatch(toggleGenre(genre));
    };

    const isActive = (genre: IGenre) => {
        return activeGenres.some((activeGenre) => activeGenre.id === genre.id);
    };

    return (
        <div className={styles.filter}>
            <h3>Жанры</h3>
            <ul className={styles.genres}>
                {genres.map((genre) => (
                    <li
                        className={isActive(genre) ? `${styles.active}` : ''}
                        key={genre.id}
                        onClick={() => handleGenreClick(genre)}
                    >
                        {genre.russian}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
