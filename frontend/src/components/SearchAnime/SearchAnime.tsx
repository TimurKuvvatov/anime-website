import React, { FC} from 'react';
import styles from './SearchAnime.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearch } from '../../redux/slices/searchSlice';

const SearchAnime: FC = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector((state) => state.search.value);
    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value));
    };
    return (
        <div className={styles.search}>
            <input
                onChange={changeHandle}
                type="text"
                placeholder="Поиск..."
                className={styles.input}
                value={value}
            />
        </div>
    );
};

export default SearchAnime;
