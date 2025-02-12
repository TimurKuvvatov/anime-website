import styles from './WelcomeSection.module.scss';
import firstGirlImg from '../../assets/img/welcome-section-first-girl.png';
import secondGirlImg from '../../assets/img/welcome-section-second-girl.png';
import { useNavigate } from 'react-router-dom';

const WelcomeSection = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/animes');
    };
    return (
        <section className={styles.section}>
            <div className={styles.title}>
                <h1>
                    Рады <span>вас видеть</span>!!!{'<3'}
                    <br />
                    Что посмотрим сегодня,
                    <br />
                    <span>хозяин</span>?
                </h1>
            </div>
            <button onClick={handleClickButton} className={styles.button} type="button">
                В ПОИСК!
            </button>
            <div className={styles.characters}>
                <img src={firstGirlImg} alt="girl" />
                <img src={secondGirlImg} alt="girl" />
            </div>
        </section>
    );
};

export default WelcomeSection;
