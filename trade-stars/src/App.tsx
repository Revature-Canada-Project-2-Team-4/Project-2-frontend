import { Link, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Register } from './CustomerComponent/CustomerRegister';
import { ClippedDrawer } from './components/side-nav/ClippedDrawer';
import { Button } from '@material-ui/core';
import { ViewAppointments } from './components/customer/view-app/ViewAppointments';
import { LoginForm } from './components/login/LoginForm';
import { User } from './models/User';



function App() {
  const [user, changeUser] = useState<User>();

  return (
    <div className="App">
      <header className="App-header">
        
      <Router>
      <Route path="/">
        <ClippedDrawer updateCurrentUser={changeUser} currentUser={user}/>
      </Route>
      <Route path="/login">
        <LoginForm updateCurrentUser={changeUser} currentUser={user}/>
      </Route>
      </Router>
              
      </header>
    </div>
  );
}

export default App;
