import styles from './KindsAnime.module.scss';

import { kinds } from '../../data/kinds';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleKinds } from '../../redux/slices/kindsSlice';
import { IKind } from '../../models/IKind';
import { useCallback } from 'react';

import CheckSvg from '../../assets/icon/check.svg';

const KindsAnime = () => {
    const dispatch = useAppDispatch();
    const activeKinds = useAppSelector((state) => state.kinds.kinds);

    const handleClick = (kind: IKind) => {
        dispatch(toggleKinds(kind));
        console.log(activeKinds);
    };

    const isActive = useCallback(
        (kind: IKind) => {
            return activeKinds.some((activeKind) => activeKind.name === kind.name);
        },
        [activeKinds],
    );

    return (
        <ul className={styles.kinds}>
            {kinds.map((kind) => (
                <li key={kind.name} onClick={() => handleClick(kind)} className={styles.kind}>
                    <div
                        className={`${styles.checkbox} ${
                            isActive(kind) ? styles.activeCheckbox : ''
                        }`}
                    >
                        <img src={CheckSvg} alt="check" />
                    </div>
                    <span>{kind.russian}</span>
                </li>
            ))}
        </ul>
    );
};

export default KindsAnime;
