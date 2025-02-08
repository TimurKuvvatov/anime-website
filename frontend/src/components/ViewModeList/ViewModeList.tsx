import styles from './ViewModeList.module.scss';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setView } from '../../redux/slices/viewModeSlice';
import { IViewMode } from '../../models/IViewMode';

import ListSvg from '../../assets/icon/sort-list.svg';
import GridSvg from '../../assets/icon/sort-grid.svg';

const ViewModeList = () => {
    const dispatch = useAppDispatch();
    const viewMode = useAppSelector((state) => state.viewMode.value);
    const viewModeList: IViewMode[] = [
        {
            name: 'list',
            russian: 'Список',
        },
        {
            name: 'grid',
            russian: 'Сетка',
        },
    ];
    return (
        <div className={styles.viewMode}>
            {viewModeList.map((viewModeEl) => (
                <div
                    key={viewModeEl.name}
                    onClick={() => dispatch(setView(viewModeEl.name))}
                    className={`${styles.mode} ${
                        viewModeEl.name === viewMode ? styles.active : ''
                    }`}
                >
                    <img src={viewModeEl.name === 'list' ? ListSvg : GridSvg}></img>
                </div>
            ))}
        </div>
    );
};

export default ViewModeList;
