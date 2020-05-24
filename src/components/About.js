import React from 'react';
import { Grid } from '@material-ui/core';

import './about.css';
import steph from '../assets/steph.jpg';
import regis from '../assets/regis.jpg';
import linkedin from '../assets/linkedin.png';

const About = () => {
    return (
        <div id='about'>
            <h2>Qui sommes-nous ?</h2>
            <Grid container spacing={5}>
                <Grid item xl={2} lg={2} md={12} sm={12} xs={12} />
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <div className='avatar-wrapper'>
                        <img src={steph} alt='stephane lefebvre' />
                        <div className='hidden'>
                            <p>"Faire de notre expertise de la gestion financière une force pour vous apporter notre savoir-faire."</p>
                            <h5>Stéphane Lefebvre</h5>
                            <a href='https://www.linkedin.com/in/stephanelefebvre/' target='_blank' rel="noopener noreferrer">
                                <img src={linkedin} alt='linkedin' />
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <div className='avatar-wrapper'>
                        <img src={regis} alt='regis trichard' />
                        <div className='hidden'>
                            <p>"Mettre notre énergie et notre écoute au service d'une pédagogie active pour une gestion opérationnelle immédiate."</p>
                            <h5>Régis Trichard</h5>
                            <a href='https://www.linkedin.com/in/r%C3%A9gis-trichard-782b37192/' target='_blank' rel="noopener noreferrer">
                                <img src={linkedin} alt='linkedin' />
                            </a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;