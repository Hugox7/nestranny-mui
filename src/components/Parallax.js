import React from 'react';
import { Parallax } from 'react-parallax';

import './parallax.css';

const ParallaxComponent = () => {
    return (
   
        <div>
            <Parallax
                blur={0}
                bgImage={require('../assets/cover.jpg')}
                bgImageAlt="the cat"
                strength={600}
            >
                <div id="parallax-content" style={{ height: '700px' }}>
                    <div id="cadre-parallax">
                        <div>
                            <h2>Formation et conseil</h2>
                            <p>Construisons ensemble un système performant d'analyse de gestion</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
     
    );
}

export default ParallaxComponent;