import React from 'react';

import Parallax from '../components/Parallax';
import Cards from '../components/Cards';
import Picto from '../components/Picto';
import KeyFacts from '../components/KeyFacts';
import About from '../components/About';

const Home = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Parallax />
            <Cards />
            <Picto />
            <KeyFacts />
            <About />
        </div>
    );
}

export default Home;