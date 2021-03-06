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
import { CreateReview } from './components/reviews/CreateReview';
import { Company } from './models/Company';
import { Register } from './customer-comp/CustomerRegister';
import { ServiceRegister } from './components/servicesregister/ServiceRegister';



function App() {
  const [user, changeUser] = useState<User>();
  const [company, changeCompany] = useState<Company>();
  

  

  return (
    <div className="App">
      <header className="App-header">
      
      <Router>
      <Route path= "/CreateReview"> 
      <CreateReview updateCurrentUser={changeUser} currentUser={user} updateCurrentCompany = {changeCompany} currentCompany = {company}/> 
      </Route>

      <Route path= "/TradesmenCompanyRegister"> 
      <TradesmenCompanyRegister updateCurrentUser={changeUser} currentUser={user} updateCurrentCompany = {changeCompany} currentCompany = {company}  /> 
      </Route>
      <Route path="/dashboard">
        <ClippedDrawer updateCurrentUser={changeUser} currentUser={user} updateCurrentCompany = {changeCompany} currentCompany = {company}/>
      </Route>
      <Route exact path="/login">
        <LoginForm updateCurrentUser={changeUser} currentUser={user}/>
      </Route>
      <Route path= "/tradesmenregister" exact component = {TradesmenRegister}>
        <TradesmenRegister updateCurrentUser={changeUser} currentUser={user}/>
      </Route>
      <Route path= "/serviceregister" exact component = {ServiceRegister} >
        <ServiceRegister updateCurrentUser={changeUser} currentUser={user} updateCurrentCompany = {changeCompany} currentCompany = {company} />
      </Route>
       
      <Route path= "/customerregister" exact component = {Register}>
        <Register updateCurrentUser={changeUser} currentUser={user}/>
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
