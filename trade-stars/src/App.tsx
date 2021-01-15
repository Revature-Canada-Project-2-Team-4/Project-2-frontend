import { Link, Switch, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { TradesmenCompanyRegister } from './components/register/TradesmenCompanyRegister';
import { TradesmenRegister } from './components/register/TradesmenRegister';
import { ClippedDrawer } from './components/side-nav/ClippedDrawer';
import { LoginForm } from './components/login/LoginForm';
import { User } from './models/User';
import { LandingPage } from './components/landing-page/LandingPage';



function App() {
  const [user, changeUser] = useState<User>();
  

  

  return (
    <div className="App">
      <header className="App-header">
      
      <Router>
      

      <Route path= "/TradesmenCompanyRegister"> 
      <TradesmenCompanyRegister updateCurrentUser={changeUser} currentUser={user}/> 
      </Route>
      <Route path="/dashboard">
        <ClippedDrawer updateCurrentUser={changeUser} currentUser={user}/>
      </Route>
      <Route exact path="/login">
        <LoginForm updateCurrentUser={changeUser} currentUser={user}/>
      </Route>
      <Route path= "/register" exact component = {TradesmenRegister}>
        <TradesmenRegister updateCurrentUser={changeUser} currentUser={user}/>
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
      </Router>
              
      </header>
    </div>
  );
}

export default App;
