import { FC } from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

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
            name: 'ПОИСК АНИМЕ',
            link: '/animes',
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
                    <li key={navElem.name}>
                        <Link to={navElem.link}>{navElem.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
