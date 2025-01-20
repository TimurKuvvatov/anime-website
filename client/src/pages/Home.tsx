import { FC } from 'react';
import Trending from '../components/Trending/Trending';
import Hits from '../components/Hits/Hits';

const Home: FC = () => {
    return (
        <>
            <Trending />
            <Hits />
        </>
    );
};

export default Home;
