import { FC } from 'react';
import Trending from '../components/Trending/Trending';
import Hits from '../components/Hits/Hits';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';

const Home: FC = () => {
    return (
        <>
            <WelcomeSection />
            <Hits />
            <Trending />
        </>
    );
};

export default Home;
