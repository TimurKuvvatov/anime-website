import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation />
        </header>
    );
};

export default Header;
