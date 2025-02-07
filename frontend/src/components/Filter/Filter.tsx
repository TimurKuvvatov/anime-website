import styles from './Filter.module.scss';

import ViewModeList from '../ViewModeList/ViewModeList';
import GenresList from '../GenresList/GenresList';

const Filter = () => {
    return (
        <div className={styles.filter}>
            <h3>Жанры</h3>
            <GenresList />
            <h3>Отображение</h3>
            <ViewModeList />
        </div>
    );
};

export default Filter;
