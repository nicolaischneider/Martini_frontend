import React from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../layout/logo.png';

class Home extends React.Component {
    state = {
    }
    
    render() {
       
        return(
            
            <div className="media p-3 w-50 mx-auto  rounded-lg" style={{background: '#333'}}>
                <img src={logo} alt="Logo" className="logo align-self-center w-25 h-25" />
                <h2 class="media-body text-light align-self-center p-3" >Welcome back {this.props.user}!</h2>  
            </div>
        ) 
    }
}
export default Home;