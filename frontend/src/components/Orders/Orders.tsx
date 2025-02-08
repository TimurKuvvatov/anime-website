import styles from './Orders.module.scss';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { orders } from '../../data/orders';
import { useEffect, useRef, useState } from 'react';
import { setOrder } from '../../redux/slices/orderSlice';

const Orders = () => {
    const dispatch = useAppDispatch();
    const modalRef = useRef<HTMLDivElement>(null);
    const activeOrder = useAppSelector((state) => state.order.order);
    const activeRussianOrder = orders.find((order) => order.name === activeOrder);
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleModalClick = (order: string) => {
        dispatch(setOrder(order));
        setOpen((value) => !value);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current?.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleClickOutside);
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, []);
    return (
        <div ref={modalRef} className={styles.orders}>
            <div onClick={() => setOpen((value) => !value)} className={styles.order}>
                {activeRussianOrder?.russian}
            </div>
            <ul className={`${styles.modal} ${isOpen ? styles.activeModal : ''}`}>
                {isOpen &&
                    orders.map((order) => (
                        <li
                            key={order.name}
                            onClick={() => handleModalClick(order.name)}
                            className={`${styles.order} ${
                                activeOrder === order.name ? styles.activeOrder : ''
                            }`}
                        >
                            {order.russian}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Orders;
