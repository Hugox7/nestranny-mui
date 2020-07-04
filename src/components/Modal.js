import React from 'react';
import { Dialog, Slide, IconButton } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles'

import './modal.css';
import pedagogy from '../assets/pedagogy.png';
import time from '../assets/time.png';
import theme from '../assets/theme.png';

const styles = () => ({
    dialog: {
        '& .MuiDialogTitle-root': {
            padding: 0,
        },
    },
    
});

class ModalComponent extends React.Component {

    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {

        const { formation, classes } = this.props;

        let color;
        if (formation.formation === 'secteur privé') {
            color = 'blue';
        } else if (formation.formation === 'secteur public') {
            color = 'green';
        } else if (formation.formation === 'secteur audit') {
            color = 'orange';
        } else {
            color = null;
        }

        return (
            <div id='modal'>
                <p onClick={this.handleOpen} id='modal-title'>{formation.fiche} - {formation.titre}</p>
                <Dialog
                    //fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    className={classes.dialog}
                    //TransitionComponent={Transition}
                >
                    <div className='modal-header'>
                        {/* <div id='sheet-number'>
                            <div>
                                <h4>FICHE<br />0{formation.fiche}</h4>
                            </div>
                        </div> */}
                        <h5>{formation.fiche} - {formation.titre}</h5>
                        <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div id='header-separation' />
                    <div id='modal-picto'>
                        <div>
                            <img src={theme} alt='theme' />
                            <p>{formation.section}</p>
                        </div>
                        <div>
                            <img src={time} alt='time' />
                            <p>{formation.duree}</p>
                        </div>
                        <div>
                            <img src={pedagogy} alt='pedagogy' />
                            <p>{formation.pedagogie}</p>
                        </div>
                    </div>
                    <div id='modal-content'>
                        <div className={`modal-section ${color}`}>Public</div>
                        <p>{formation.public}</p>
                        <div className={`modal-section ${color}`}>Objectif</div>
                        <p>{formation.objectifs}</p>
                        <div className={`modal-section ${color}`}>Contenu</div>
                        <ul>
                            {formation.contenu.map((elem, index) => {
                                return <li key={index}>{elem}</li>
                            })}
                        </ul>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(ModalComponent);
