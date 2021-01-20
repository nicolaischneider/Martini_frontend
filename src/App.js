
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Players from './components/pages/Players';
import Predictions from './components/pages/Predictions';
import Finances from './components/pages/Finances';
import SidebarContent from './components/SidebarContent';
import './App.css';

class App extends Component {
  
  
  render() {
    return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
            </div>
            <SidebarContent />
            <Route exact path="/" />
            <Route exact path="/allplayers" component={Players}/>
            <Route path="/predictions" component={Predictions} />
            <Route path="/finances" component={Finances} />
          </div>
        </Router>    
    
    );
  }
}


export default App;
