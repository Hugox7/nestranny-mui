import React from 'react';
import emailjs from 'emailjs-com';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import './contact.css';
import MapComponent from '../components/MapComponent';

class Contact extends React.Component {

    state = {
        user_subject: '',
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

    handleSubmit = (e) => {
        e.preventDefault();
        const USER_ID = process.env.REACT_APP_USER_ID;
        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    }

    render() {
        return (
            <div style={{ padding: '40px 2vw 40px 2vw', backgroundColor: '#F5F5F5' }}>
                <Grid container spacing={8}>
                    <Grid item xl={1} lg={1} md={12} sm={12} xs={12} />
                    <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
                        <ValidatorForm
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <p className='label'>Sujet *</p>
                            <TextValidator 
                                onChange={this.handleChange} 
                                type='text' size='small' 
                                variant='outlined'
                                name='user_subject'
                                value={this.state.user_subject}
                                validators={['required']}
                                errorMessages={['Champ requis']}
                            />
                            <p className='label'>Votre adresse email *</p>
                            <TextValidator 
                                onChange={this.handleChange} 
                                type='mail' size='small' 
                                variant='outlined'
                                name='user_email'
                                value={this.state.user_email}
                                validators={['required', 'isEmail']}
                                errorMessages={['Champ requis', 'Adresse mail non valide']}
                            />
                            <p className='label'>Votre numéro de téléphone</p>
                            <TextValidator 
                                onChange={this.handleChange} 
                                type='text' size='small' 
                                variant='outlined'
                                name='user_phone'
                                value={this.state.user_phone}
                            />
                            <p className='label'>Votre message *</p>
                            <TextValidator 
                                onChange={this.handleChange}
                                multiline={true}
                                type='text' size='small' 
                                variant='outlined'
                                name='user_message'
                                value={this.state.user_message}
                                validators={['required']}
                                errorMessages={['Champ requis']}
                                rows='10'
                            />
                            <Button 
                                variant='contained' 
                                color='primary' 
                                type='submit'
                                style={{ marginTop: '25px', width: '100%' }}
                            >
                                Envoyer
                            </Button>
                        </ValidatorForm>
                    </Grid>
                    <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
                        <div id="contact-card">
                            <div>
                                <h5>Un renseignement, un devis ?</h5>
                                <p>N'hésitez pas à nous contacter et nous vous répondrons dans les plus brefs délais.</p>
                                <div className="contact-info">
                                    <p><span>Nestranny Conseil</span><br/>38 bis rue du Général Leclerc<br />78570 Andrésy<br/>01 39 27 38 52</p>
                                </div>
                            </div>
                                
                            
                            
                            
                            
                            <MapComponent />
                            
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Contact;