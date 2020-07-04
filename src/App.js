import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";

import './app.css';
import { initGA, pageView, anonymize } from './config/reactGa';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Partenaires from './pages/Partenaires';
import Public from './pages/Public';
import Prive from './pages/Prive';
import Conseil from './pages/Conseil';

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
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/partenaires' component={Partenaires} />
          <Route path='/secteur-public' component={Public} />
          <Route path='/secteur-prive' component={Prive} />
          <Route path='/conseil-etudes-et-audits' component={Conseil} />
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
        <Footer />
      </div>
    );
  }
}

export default App;
