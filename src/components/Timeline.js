import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Timeline, Event } from 'react-timeline-scribble';

import './timeline.css';

const TimelineComponent = () => {
    return (
        <div style={{ padding: '50px 0px', backgroundColor: 'white' }}>
            <Grid container spacing={1}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>

                    <Fragment>
                        <Timeline>
                            <Event interval={"2000"}>
                                Naissance d’une belle amitié et complémentarité professionnelle entre Stéphane Lefebvre, directeur financier et Régis Trichard, 
                                directeur du service Enfance et Scolaire au sein de la commune de Vernouillet (Yvelines).
                            </Event>
                            <Event interval={"2003"}>
                                Stéphane Lefebvre décide de se lancer seul dans une nouvelle aventure et créé Nestranny Conseil, fort de son expérience de directeur financier et de celle de consultant formateur dans deux cabinets de conseil. 
                                Nestranny Conseil est née de la volonté de mettre au service des acteurs du secteur public ses compétences issues de cette double expérience.
                            </Event>
                            <Event interval={"2004"}>
                                Régis Trichard quitte la commune de Vernouillet pour prendre en charge et développer 
                                les services Education de deux nouvelles collectivités du Val d’Oise.
                            </Event>
                            <Event interval={"2009"}>
                                Stéphane Lefebvre complète l’offre de Nestranny Conseil avec la mise en œuvre de formations 
                                à la gestion pour les entreprises du secteur privé.
                            </Event>
                        </Timeline>
                    </Fragment>

                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Fragment>
                        <Timeline>
                            <Event interval={"2011"}>
                                Régis Trichard quitte les collectivités locales pour devenir directeur d’exploitation au sein d’une société spécialisée dans le secteur du nettoyage industriel en région parisienne. 
                                Parallèlement, il épaule ponctuellement Stéphane Lefebvre en animant des formations en comptabilité et initiation aux finances publiques. Stéphane Lefebvre développe l’activité de Nestranny Conseil autour de l’accompagnement durable des collectivités territoriales dans leur analyse financière, sous forme de formation-action.

                            </Event>
                            <Event interval={"2017"}>
                                De belles retrouvailles professionnelles pour ces amis de longue date. Régis Trichard appuie Stéphane Lefebvre 
                                en apportant une expertise supplémentaire autour du contrôle de gestion.
                            </Event>
                            
                            <Event interval={"2018"}>
                                Régis Trichard intègre définitivement Nestranny Conseil.
                            </Event>
                        </Timeline>
                    </Fragment>
                </Grid>
            </Grid>
        </div>
    );
}

export default TimelineComponent;