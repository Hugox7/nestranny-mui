import React from 'react';

const style = {
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const date = new Date().getFullYear();

const Footer = () => {
    return (
        <div style={style}>
            © Copyright Nestranny Conseil - {date}
        </div>
    );
}

export default Footer;