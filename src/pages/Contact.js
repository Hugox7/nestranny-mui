import React from 'react';
import emailjs from 'emailjs-com';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles'

import './contact.css';
import MapComponent from '../components/MapComponent';
//import 'leaflet/dist/leaflet.css';


const styles = theme => ({
    input: {
        backgroundColor: '#EDEDEE',
        //borderRadius: '5px',
        // '& .MuiInputBase-input': {
        //     color: 'white',
        // },
        // '& label.Mui-focused': {
        //   },
        //   '& .MuiInput-underline:after': {
        //     borderBottomColor: 'white',
        //   },
        //   '& .MuiInput-underline:before': {
        //       borderBottom: 'white 2px solid',
        //   },
        //   '& .MuiInput-underline:hover:before': {
        //         borderBottom: 'white 2px solid',
        //   },
        //   '& .MuifilledInput-root': {
        //       color: 'white',
        //     '& fieldset': {
        //       borderColor: 'white',
        //     },
        //     '&:hover fieldset': {
        //       borderColor: 'white',
        //     },
        //     '&.Mui-focused fieldset': {
        //       borderColor: 'white',
        //     },
        //   },
    },
    button: {
        marginTop: '30px',
        // color: 'white',
        // border: '2px solid white',
        width: '100%',
        borderRadius: 0,
    }
})

class Contact extends React.Component {

    state = {
        user_email: '',
        user_phone: '',
        user_message: '',
        loading: false,
        response: null,
        error: null,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const { user_message, user_phone, user_email } = this.state;
        const USER_ID = process.env.REACT_APP_USER_ID;
        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

        const templateParams = {
            user_email,
            user_phone,
            user_message,
        }

        try {
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
            this.setState({ response, loading: false });
            this.resetForm();
        } catch (error) {
            console.log(error);
            this.setState({ error, loading: false });
        }
    }

    resetForm() {
        this.setState({
            user_email: '',
            user_phone: '',
            user_message: '',
        });
    }

    render() {
        const classes = this.props.classes;

        return (
            <div id='contact'>
                <div id='map'>
                    <MapComponent />
                </div>
                <div id='contact-content'>
                    <div id='form-part'>
                        <ValidatorForm
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            {this.state.error &&
                                <Alert onClose={() => this.setState({ error: null })} severity="error">
                                    Erreur lors de l'envoi du message !
                                </Alert>
                            }
                            {this.state.response &&
                                <Alert onClose={() => this.setState({ response: null })} severity="success">
                                    Merci pour votre message, nous reviendrons vers vous rapidement.
                                </Alert>
                            }
                            <TextValidator 
                                onChange={this.handleChange} 
                                placeholder='Votre adresse email *'
                                type='email' size='small' 
                                name='user_email'
                                value={this.state.user_email}
                                validators={['required', 'isEmail']}
                                errorMessages={['champ requis', 'adresse email non valide']}
                                className={classes.input}
                                InputProps={{ disableUnderline: true }}     
                            />
                            <div style={{ height: '30px' }} />
                            <TextValidator
                                placeholder='Votre numéro de téléphone'
                                onChange={this.handleChange} 
                                type='text' size='small' 
                                name='user_phone'
                                value={this.state.user_phone}
                                className={classes.input}
                                InputProps={{ disableUnderline: true }}               
                            />
                            <div style={{ height: '30px' }} />
                            <TextValidator
                                placeholder='Votre message *'
                                onChange={this.handleChange} 
                                multiline={true} 
                                type='text' 
                                size='small' 
                                rows='4' 
                                name='user_message'
                                value={this.state.user_message}
                                validators={['required']}
                                errorMessages={['Champ requis']}
                                className={classes.input}
                                InputProps={{ disableUnderline: true }} 
                            />
                            <Button 
                                disabled={this.state.loading} 
                                type='submit' 
                                variant='contained' 
                                color='secondary' 
                                className={classes.button}
                            >
                                Envoyer
                            </Button>
                        </ValidatorForm>
                    </div>
                    <div id='info-part'>
                        <h1>Un renseignement, un devis ?</h1>
                        <h5>N'hésitez pas à nous contacter et nous vous répondrons dans les plus brefs délais.</h5>
                        <p style={{ textAlign: 'center', marginTop: '40px' }}>
                            Nestranny Conseil<br />
                            38 bis rue du Général Leclerc<br />
                            78570 - Andrésy<br />
                            01 39 27 38 52
                        </p>
                    </div>
                </div> 
            </div>
        );
    }
}

export default withStyles(styles)(Contact);