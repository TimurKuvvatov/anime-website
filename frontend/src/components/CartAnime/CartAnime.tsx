import { FC } from 'react';
import { IAnimeCart } from '../../models/IAnimeCart';
import styles from './CartAnime.module.scss';
import { BASE_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';
const CartAnime: FC<IAnimeCart> = ({ russian, id, image, kind, score, status, episodes }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/animes/${id}`);
    };

    return (
        <div
            onClick={handleClick}
            style={{ background: `url(${BASE_URL}${image.original})` }}
            className={styles.cart}
        >
            <div className={styles.content}>
                <h3>{russian}</h3>
                <p>Тип: {kind}</p>
                <p>Рейтинг: {score}</p>
                <p>Кол-во эпизодов: {episodes}</p>
                <p>Статус: {status}</p>
            </div>
        </div>
    );
};

export default CartAnime;
