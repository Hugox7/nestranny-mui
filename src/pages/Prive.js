import React from 'react';
import { Grid } from '@material-ui/core';

import './prive.css';
import { 
    priveMarchepublicData, 
    priveFondamentauxData, 
    priveAnalyseData, 
} from '../config/priveData';
import Modal from '../components/Modal';
import privePic from '../assets/image2.jpg';

class Prive extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id='prive'>
                <Grid container>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div id='prive-left'>
                            <h2>Formations secteur privé</h2>
                            <div id='separation' />
                            <p>
                                Dans un contexte économique tendu, où la maîtrise des coûts et la pérennisation des marges 
                                restent des objectifs vitaux pour assurer la rentabilité des entreprises, nous vous proposons 
                                d'en optimiser la gestion opérationnelle et de mieux en maîtriser l'activité. 
                                Atteindre cet objectif passe par un renforcement des compétences des différents collaborateurs en matière de gestion. 
                                C'est à cette fin que nous mettons des formations sur mesure, spécifiquement adaptées aux entreprises.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div id='prive-right'>
                            <img src={privePic} alt='prive' />
                        </div>
                    </Grid>
                </Grid>
                <div id='public-content'>
                    <div className='container container-prive'>
                        <h3>CONTRÔLE DE GESTION</h3>
                        <div>
                            {priveMarchepublicData.map(elem => {
                                return <Modal formation={elem} />
                            })}
                        </div>
                    </div>
                    <div className='container container-prive'>
                        <h3>COMPTABILITÉ</h3>
                        <div>
                            {priveFondamentauxData.map(elem => {
                                return <Modal formation={elem} />
                            })}
                        </div>
                    </div>
                    <div className='container container-prive'>
                        <h3>BUDGET</h3>
                        <div>
                            {priveAnalyseData.map(elem => {
                                return <Modal formation={elem} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prive;
