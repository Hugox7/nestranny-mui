import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";

import './app.css';
import { initGA, pageView, anonymize } from './config/reactGa';
import Header from './components/Header';
import Home from './pages/Home';

class App extends React.Component {

  handleCookies = () => {
    initGA();
    pageView('/');
    anonymize();
  }

  render() {
    return (
      <div className="app">
        <div style={{ height: '75px' }} />
        <Header />
        <Switch>
          <Route exact to='/' component={Home} />
        </Switch>
        <CookieConsent
          flipButtons
          location="bottom"
          buttonText="Accepter"
          enableDeclineButton
          declineButtonText="Refuser"
          style={{ 
            background: "#2B373B", 
            maxWidth: '350px', 
            margin: '1.5vw', 
            borderRadius: '5px', 
            //color: 'black', 
            //boxShadow: '0 0 5px lightgray', 
            //border: '2px solid lightgray',
          }}
          buttonStyle={{ 
            color: "white", 
            fontSize: "13px", 
            borderRadius: '5px', 
            fontWeight: 'bold', 
            background: '#41B450'
          }}
          declineButtonStyle={{ background: '#2B373B', color: 'white' }}
          expires={150}
          onAccept={() => { this.handleCookies() }}
        >
          <p>Ce site utilise utilise les cookies suivants afin d'améliorer votre expérience utilisateur :</p>
          <ul>
            <li>Google Analytics</li>
          </ul>
        </CookieConsent>
      </div>
    );
  }
}

export default App;
