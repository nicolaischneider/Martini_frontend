import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Navigation from './components/pages/Navigation';
import PlayerData from './components/data/PlayerData';
import Predictions from './components/pages/Predictions';
import Transactions from './components/pages/Transactions';
import UserData from './components/data/UserData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  state = {
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
              <Navigation loggedIn={this.state.loggedIn} setLogged={this.setLogged}/>
            </div>
            <div class="row" style={{margin:'100px 30px'}}>
              <div class="col-sm-3">
                <UserData/>
              </div>
              <div class="col-sm-8">
                <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <Route exact path="/login" component={() => <Login setLogged={this.setLogged} loggedIn ={this.loggedIn}/>}/> 
                <PrivateRoute exact path="/allplayers" component={PlayerData}/>
                <PrivateRoute path="/predictions" component={Predictions} />
                <PrivateRoute path="/finances" component={Transactions} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>    
    );
  }
}

export default App;