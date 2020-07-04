
import React, { useEffect } from 'react';

import { partenaires } from '../config/partenairesData';
import PartenaireCard from '../components/PartenaireCard';

import './partenaires.css';



const Partenaires = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id='partenaires'>
            <div id="partenaires-header">
                <h2>Nos partenaires</h2>
                <hr style={{ width: '500px', backgroundColor: 'white' }}/>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p style={{ maxWidth: '800px', marginTop: '20px', textAlign: 'justify' }}>
                        Pour aller plus loin et au delà de notre champ de compétences, Nestranny Conseil développe un réseau de partenaires susceptible de vous apporter des solutions complémentaires
                        dans les domaines du management et des ressources humaines. Ce réseau professionnel est uni par des valeurs communes de pédagogie, d'écoute et d'humilité.
                    </p>
                </div>
            </div>
            <div id='partenaires-content'>
                {partenaires.map(partenaire => {
                    return <PartenaireCard key={partenaire.company} partenaire={partenaire} />
                })}
            </div>
        </div>
        
    );
}

export default Partenaires;