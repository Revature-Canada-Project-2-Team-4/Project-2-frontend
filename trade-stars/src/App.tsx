import { Link, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { TradesmenDescriptionRegister } from './components/register/TradesmenDescriptionRegister';
import TradesmenCompanySignin from './components/register/TradesmenCompanySignin';
import { TradesmenRegister } from './components/register/TradesmenRegister';
import { Register } from './CustomerComponent/CustomerRegister';
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateReview from './components/reviews/CreateReview';
=======
import { ClippedDrawer } from './components/side-nav/ClippedDrawer';
import { Button } from '@material-ui/core';
import { ViewAppointments } from './components/customer/view-app/ViewAppointments';
import { LoginForm } from './components/login/LoginForm';
import { User } from './models/User';


>>>>>>> a70f1e1318edc989eb7bb38f00867b8c118caa20

function App() {
  const [user, changeUser] = useState<User>();

  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <h1>Trade Stars</h1>
       <Router>
       <Route path= "/" exact component = {TradesmenRegister} />
       <Route path= "/TradesmenDescriptionRegister" exact component = {TradesmenDescriptionRegister} />
       <Route path= "/TradesmenCompanySignin" exact component = {TradesmenCompanySignin} />
       <Route path= "/CreateReview" exact component = {CreateReview} />
       </Router>
=======
        
      <Router>
      <Route path="/dashboard">
        <ClippedDrawer updateCurrentUser={changeUser} currentUser={user}/>
      </Route>
      <Route exact path="/">
        <LoginForm updateCurrentUser={changeUser} currentUser={user}/>
      </Route>
      </Router>
              
>>>>>>> a70f1e1318edc989eb7bb38f00867b8c118caa20
      </header>
    </div>
  );
}

export default App;
