import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../layout/logo.png';
import axios from 'axios'; 

export default class Navigation extends Component {
    
    handleLogout = (e) => {
        axios.post ('http://46.101.237.138/logout/', JSON.parse(localStorage.getItem('user')))
            localStorage.clear()
            this.props.setLogged(false)      
    }


    render () {
        
        let logoutButton;

        if (localStorage.getItem('user')=== null){
            logoutButton = (
                null
            ) 
        }
        else{
            logoutButton = (
                <div className="form-group" >
                    <Link className="btn btnO btn-primary" to="/login" onClick= {this.handleLogout}>Log out</Link>
                </div> 
            )
        }

        return (
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top shadow-lg" style={{background: '#333'}}>
                <Link className="navbar-brand" to="/" ><img src={logo} alt="Logo" className="logo" />Martini</Link> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to="/allplayers" activeStyle={{color: 'green'}}> Team </Link>  
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/predictions" activeStyle={{color: 'green'}}> Recommendations </Link>  
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/finances" activeStyle={{color: 'green'}}> Transactions </Link> 
                        </li>
                        
                    </ul>
                    
                </div> 
                <div style= {{marginLeft: ''}}>
                    {logoutButton} 
                </div>
            </nav>
        )
    }

}


        
        /*axios.get('http://127.0.0.1:8000/logout/')
        localStorage.clear()
        this.props.setLogged(false)*/

      