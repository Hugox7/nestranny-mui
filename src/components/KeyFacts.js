import React from 'react';
import { Parallax } from 'react-parallax';
import Bounce from 'react-reveal/Bounce';

import './keyFacts.css';

const KeyFacts = () => {
    return (
        <div>
            <Parallax
                blur={0}
                bgImage={require('../assets/image3.jpg')}
                bgImageAlt="the cat"
                strength={600}
                className="parallax-keyFacts"
            >
                <div id="parallax-content2" style={{ minHeight: '700px' }}>
                    <p id="keyNumbers">Chiffres clés</p>
                    <div id="key-facts">
                        
                                <div className="fact">
                                    <Bounce bottom>
                                        <h5>600</h5>
                                    </Bounce>
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Stagiaires <br/>par an</p>
                                </div>
                            
                                <div className="fact">
                                    <Bounce bottom>
                                        <h5>50</h5>
                                    </Bounce>  
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Formations <br/> par an</p>
                                </div>
                            
                                <div className="fact">
                                    <Bounce bottom>
                                        <h5>100</h5>
                                    </Bounce>
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Jours de formations <br/>par an</p>
                                </div>
                            
                                <div className="fact">
                                    <Bounce bottom>
                                        <h5>12</h5>
                                    </Bounce>
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Effectif moyen <br/>par formation</p>
                                </div>
                            
                                <div className="fact">
                                    <Bounce bottom>
                                        <h5>98%</h5>
                                    </Bounce>
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Taux <br/>de satisfaction</p>
                                </div>
                            
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default KeyFacts;