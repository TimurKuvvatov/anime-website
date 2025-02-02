import React, { FC, useEffect, useState } from 'react';
import styles from './Search.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { setSearch } from '../../redux/slices/searchSlice';
import { setPage } from '../../redux/slices/pageSlice';
import useDebounce from '../../hooks/useDebounce';

const SearchAnime: FC = () => {
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchValue = useDebounce(searchValue, 300);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        dispatch(setPage(1));
        dispatch(setSearch(debouncedSearchValue));
    }, [debouncedSearchValue, dispatch]);

    return (
        <div className={styles.search}>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Поиск..."
                className={styles.input}
                value={searchValue}
            />
        </div>
    );
};

export default SearchAnime;
