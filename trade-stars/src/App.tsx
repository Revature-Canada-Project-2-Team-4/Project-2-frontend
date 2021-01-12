import React from 'react';
import './App.css';
import { TradesmenDescriptionRegister } from './components/register/TradesmenDescriptionRegister';
import TradesmenCompanySignin from './components/register/TradesmenCompanySignin';
import { TradesmenRegister } from './components/register/TradesmenRegister';
import { Register } from './CustomerComponent/CustomerRegister';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateReview from './components/reviews/CreateReview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trade Stars</h1>
       <Router>
       <Route path= "/" exact component = {TradesmenRegister} />
       <Route path= "/TradesmenDescriptionRegister" exact component = {TradesmenDescriptionRegister} />
       <Route path= "/TradesmenCompanySignin" exact component = {TradesmenCompanySignin} />
       <Route path= "/CreateReview" exact component = {CreateReview} />
       </Router>
      </header>
    </div>
  );
}

export default App;
