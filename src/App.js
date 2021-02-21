
import React, { Component, /*useState*/ } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Navigation from './components/pages/Navigation';
import PlayerData from './components/data/PlayerData';
import Predictions from './components/pages/Predictions';
import Transactions from './components/pages/Transactions';
import UserData from './components/data/UserData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    
    
  }

  componentDidMount = () => {
    axios.get('http://127.0.0.1:8000/userstats/')
      .then(res => {
        console.log(res)
        this.setUser (res.data.user_name)
        
    });
  }

  setUser = (user) => {
    this.setState ({
      user: user 
  })
  }

  setLogged = (status) => {
    this.setState ({
      loggedIn: status 
  })
  }
  
  render() {
  
        return (
            <BrowserRouter>
              <div className="App">
                <div>
                  <Navigation user={this.state.user} setUser={this.setUser}/>
                </div>
                <div class="row" style={{margin:'100px 30px'}}>
                  <div class="col-sm-3">
                    <UserData/>
                  </div>
                  <div class="col-sm-8">
                    <Switch>
                    <Route exact path="/" component={() => <Home user={this.state.user} />}/>
                    <Route exact path="/login" component={() => <Login setUser={this.setUser} setLogged={this.setLogged}/>}/> 
                    <Route exact path="/allplayers" component={PlayerData}/>
                    <Route path="/predictions" component={Predictions} />
                    <Route path="/finances" component={Transactions} />
                    </Switch>
                  </div>
                </div>
              </div>
            </BrowserRouter>    
        
        );
  }
}


export default App;
