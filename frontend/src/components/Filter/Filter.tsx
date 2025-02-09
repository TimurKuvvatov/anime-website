import styles from './Filter.module.scss';

import ViewModeList from '../ViewModeList/ViewModeList';
import GenresList from '../GenresList/GenresList';
import Orders from '../Orders/Orders';
import KindsAnime from '../KindsAnime/KindsAnime';

const Filter = () => {
    return (
        <div className={styles.filter}>
            <h3>Сортировка</h3>
            <Orders />
            <h3>Отображение</h3>
            <ViewModeList />
            <h3>Виды</h3>
            <KindsAnime />
            <h3>Жанры</h3>
            <GenresList />
        </div>
    );
};

export default Filter;
