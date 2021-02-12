
import React, { Component, /*useState*/ } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/pages/Login';
import Navigation from './components/pages/Navigation';
import PlayerData from './components/data/PlayerData';
import Predictions from './components/pages/Predictions';
import Transactions from './components/pages/Transactions';
import UserData from './components/data/UserData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

class App extends Component {

  state ={ 
    loggedin: true
  }
  
  /*componentDidMount = () => {
    axios.get('http://46.101.237.138/login/')
        /*.then (
         this.setState({
                loggedin: true
            
          })
        );       
      
  }*/

  render() {
      if (this.state.loggedin === false)
        return (
          <Login/>
        )
      else
        return (
            <BrowserRouter>
              <div className="App">
                <div>
                  <Navigation loggedin={this.state.loggedin}/>
                </div>
                <div class="row" style={{margin:'100px 30px'}}>
                  <div class="col-sm-3">
                    <UserData/>
                  </div>
                  <div class="col-sm-8">
                    <Switch>
                    <Route exact path="/"/>
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
