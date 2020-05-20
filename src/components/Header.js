import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import './header.css';
import nestranny from '../assets/nestranny.png';
import twitter from '../assets/twitter.png';

class Header extends React.Component {

    state = {
        open: false,
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (!prevState.open && this.state.open) {
            ReactDOM.findDOMNode(this.menuRef).style.display='block';
        }
    }


    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClickOutside = (e) => {
        this.setState({ open: false })
        if (this.menuRef && !this.menuRef.contains(e.target)) {
            ReactDOM.findDOMNode(this.menuRef).style.display='none';
        }
    }

    render() {
        return (    
            <div id='header'>
                <img src={nestranny} alt='nestranny logo' />
                <div id='links-part'>
                    <div className='item'>
                        <Link to="/">Accueil</Link>
                        <div className='deco' />
                    </div>
                    <div className='item dropdown' onClick={this.handleOpen}>
                        <a id='dropdown'>Nos missions <ArrowDropDownIcon /></a>
                        <div className='deco' />
                        <div id='menu' ref={node => this.menuRef = node}>
                            <div><Link to='/'>Formations secteur public</Link></div>
                            <div><Link to='/'>Formations secteur privé</Link></div>
                            <div><Link to='/'>Conseil, Etudes et Audits</Link></div>
                        </div>
                    </div>
                    <div className='item'>
                        <Link to="/partenaires">Nos partenaires</Link>
                        <div className='deco' />
                    </div>
                    <div className='item'>
                        <Link to="/contact">Contactez-nous</Link>
                        <div className='deco' />
                    </div>
                    <a href='https://twitter.com/NestrannyC' target='_blank' rel="noopener noreferrer">
                        <img src={twitter} alt='twitter' />
                    </a>
                </div>
                <div id='burger'>
                    <IconButton>
                        <MenuIcon size='large' />
                    </IconButton>
                </div>
            </div>     
        );
    }  
}

export default Header;