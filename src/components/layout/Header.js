import React from 'react';
import { NavLink} from 'react-router-dom';
import logo from './logo.png';

function Header() {
    return (
        
        <header className="headerStyle">
            <h1><img src={logo} alt="Logo" className="logo" />Martini
            <NavLink className="linkStyle" to="/" activeStyle={{color: 'green'}}></NavLink> 
            <NavLink className="linkStyle" to="/allplayers" activeStyle={{color: 'green'}}> All Players </NavLink>  
            <NavLink className="linkStyle" to="/predictions" activeStyle={{color: 'green'}}> Predictions </NavLink>  
            <NavLink className="linkStyle" to="/finances" activeStyle={{color: 'green'}}> Finances </NavLink> </h1>
        </header>
       
            
      
        
    )
}



export default Header;
