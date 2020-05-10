import React from 'react';

// Mui //
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// - - - //

import { useStyles } from '../config/muiStyles';
import './cards.css';
import egalite from '../assets/egalite.jpg';
import business from '../assets/business.jpg';
import audit from '../assets/photocards3.jpg';

const Cards = () => {

    const classes = useStyles();

    return (
        <div id='cards'>
            <div id='card-info'>
                <h2>Notre mission</h2>
                <p>Donner aux élus et aux agents des collectivités locales, aux décideurs du secteur privé et aux responsables associatifs les moyens d’utiliser des outils adaptés à leurs besoins et d’en comprendre les enjeux.</p>
            </div>
            <div id='cards-container'>
                <Card className={classes.card}>
                <CardMedia
                        className={classes.media}
                        image={egalite}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Formations Secteur Public
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Dans un contexte de raréfaction des ressources des collectivités locales, 
                            nous vous proposons d'optimiser la gestion...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' color="primary">
                            En savoir plus
                        </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={business}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Formations Secteur Privé
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Dans un contexte économique tendu, où la maîtrise des coûts et la pérennisation des marges restent des objectifs vitaux...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' color="secondary">
                            En savoir plus
                        </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={audit}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Conseil, études et audits
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Dans un contexte de raréfaction des ressources des collectivités locales, nous vous proposons d'optimiser la gestion...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className='orange' variant='contained'>
                            En savoir plus
                        </Button>
                    </CardActions>
                </Card>
            </div>
            

        </div>
    );
}

export default Cards;