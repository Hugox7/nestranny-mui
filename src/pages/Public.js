import React from 'react';
import { Grid } from '@material-ui/core';


import { 
    publicBudgetData, 
    publicComptabiliteData, 
    publicMarchepublicData, 
    publicControlegestionData, 
    publicAnalysefinanciereData,
} from '../config/publicData';
import './public.css';
import publicPic from '../assets/public-section.jpg';
import Modal from '../components/Modal';

class Public extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() { 

        return (
            <div id='public'>
                <Grid container>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div id='public-left'>
                            <h2>Formations secteur public</h2>
                            <div id='separation' />
                            <p>
                                Dans un contexte de raréfaction des ressources des collectivités locales, 
                                nous vous proposons d'optimiser la gestion financière de votre collectivité, 
                                et de mieux en maîtriser les différentes activités. 
                                Atteindre cet objectif passe par un renforcement des compétences des agents. 
                                C'est à cette fin que nous mettons en oeuvre des formations sur mesure, 
                                spécifiquement adaptées au public et à vos structures.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div id='public-right'>
                            <img src={publicPic} alt='public' />
                        </div>
                    </Grid>
                </Grid>
                <div id='public-content'>
                    <div className='container container-public'>
                        <h3>CONTRÔLE DE GESTION</h3>
                        <div>
                            {publicControlegestionData.map(elem => {
                                return <Modal formation={elem} />
                            })}
                        </div>
                    </div>
                    <div className='container container-public'>
                        <h3>COMPTABILITÉ</h3>
                        <div>
                            {publicComptabiliteData.map(elem => {
                                return <Modal formation={elem} />
                            })}
                        </div>
                    </div>
                    <div className='container container-public'>
                        <h3>BUDGET</h3>
                        <div>
                            {publicBudgetData.map(elem => {
                                return <Modal formation={elem} />
                            })}
                        </div>
                    </div>
                    <div className='container container-public'>
                        <h3>MARCHÉS PUBLICS</h3>
                        <div>
                            {publicMarchepublicData.map(elem => {
                                return <Modal formation={elem} />
                            })}
                        </div>
                    </div>
                    <div className='container container-public'>
                        <h3>ANALYSE FINANCIÈRE</h3>
                        <div>
                            {publicAnalysefinanciereData.map(elem => {
                                return <Modal formation={elem} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Public;