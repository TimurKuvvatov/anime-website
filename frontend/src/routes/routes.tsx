import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import AnimePage from '../pages/AnimePage';
import AnimeListPage from '../pages/AnimeListPage';

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
        {
            path: '/animes',
            element: <AnimeListPage />,
        },
    ]);
};
