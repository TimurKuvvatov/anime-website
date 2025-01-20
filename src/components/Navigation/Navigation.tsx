import { FC } from 'react';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
    const navList = [
        {
            name: 'Избранное',
            link: '',
        },
        {
            name: 'Главная',
            link: '',
        },
        {
            name: 'Жанры',
            link: '',
        },
        {
            name: 'Личный кабинет',
            link: '',
        },
    ];

    return (
        <nav className={styles.navigation}>
            <ul>
                {navList.map((navElem) => (
                    <li key={navElem.name}>{navElem.name}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
