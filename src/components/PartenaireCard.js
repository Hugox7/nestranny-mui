import React from 'react';

import './partenaireCard.css';

const PartenaireCard = ({ partenaire }) => {

    const renderContent = partenaire.additionalLink 
        ? <p>{partenaire.description} Téléchargez le catalogue en cliquant <a id="extra-link" href={partenaire.additionalLink}>ici</a></p>
        : <p>{partenaire.description}</p>;

    return (
        <div id='partenaire-card'>
            <div id="partenaire-logo-wrapper">
                <img src={partenaire.logo} alt={`logo de ${partenaire.company}`} />
            </div>
            <div id="partenaire-card-content"> 
                {renderContent}
                <a style={{ textAlign: 'start' }} href={partenaire.website} rel="noopener noreferrer" target="_blank">Consulter le site web</a>
            </div> 
        </div>
    );
}

export default PartenaireCard;