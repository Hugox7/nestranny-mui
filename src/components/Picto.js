import React from 'react';
import Grid from '@material-ui/core/Grid';

import './picto.css';
import eclair from '../assets/eclair.png';
import adaptability from '../assets/adaptability.png';
import key from '../assets/key.png';
import team from '../assets/team.png';
import { Switch } from '@material-ui/core';

const Picto = () => {
    return (
        <div id='picto'>  
            <div className='picto-line'>
                <div className='picto-item'>
                    <img src={eclair} alt='eclair' />
                    <h2>Une efficacité</h2>
                    <p>
                        Pour la constitution des groupes : Pas de seuil minimum pour permettre à chacun de se former et permettre au client de bénéficier des compétences de ses collaborateurs. 
                        15 personnes maximum pour préserver la qualité des échanges et la dynamique pédagogique.
                    </p>
                </div>
                <div className='picto-item'>
                    <img src={adaptability} alt='eclair' />
                    <h2>Une adaptabilité</h2>
                    <p>
                        Pour la mise en oeuvre des dispositifs de formation : Analyse des attentes et des besoins et validation au préalable des programmes. 
                        Adaptabilité des contenus de formation aux procédures propres du client. Des formations, des programmes et des contenus sur mesure.
                    </p>
                </div>
            </div>
            <div className='picto-line'>
                <div className='picto-item'>
                    <img src={team} alt='eclair' />
                    <h2>Une équipe</h2>
                    <p>
                        Des consultants expérimentés dans le secteur des "collectivités locales" et des "entreprises". 
                        Des consultants aux profils complémentaires, gestionnaires et financiers. Des pédagogies axées sur la transmission des savoirs.
                    </p>
                </div>
                <div className='picto-item'>
                    <img src={key} alt='eclair' />
                    <h2>Des solutions</h2>
                    <p>
                        Des outils développés pour les clients et avec les clients. 
                        Des transferts de méthodologies pour la pérennisation des outils. L'accompagnement des clients dans la mise opérationnelle des outils. La maintenance des outils.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Picto;