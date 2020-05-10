import React from 'react';

import Parallax from '../components/Parallax';
import Cards from '../components/Cards';

const Home = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Parallax />
            <Cards />
        </div>
    );
}

export default Home;