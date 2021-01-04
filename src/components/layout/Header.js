import React from 'react';
import { Link} from 'react-router-dom';
import logo from './logo.png';

function Header() {
    return (
        
        <header style={headerStyle}>
            <h1><img src={logo} alt="Logo" className="logo" />Martini</h1>
            <Link style={linkStyle} to="/"> All Players </Link> | 
            <Link style={linkStyle} to="/predictions"> Predictions </Link> | 
            <Link style={linkStyle} to="/finances"> Finances </Link>
        </header>
       
            
      
        
    )
}

const headerStyle = {
    background: '#222',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}
const linkStyle ={
        color: '#fff',
        textDecoration: 'none',
        textAlign: 'center'
    }


export default Header;
