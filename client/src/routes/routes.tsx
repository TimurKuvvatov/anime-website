import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import AnimePage from '../pages/AnimePage';

export const AppRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/animes/:id',
            element: <AnimePage />,
        },
    ]);
};
