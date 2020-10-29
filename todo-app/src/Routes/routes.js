import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Components/Home/Home';
import SignIn from '../Components/SignIn/SignIn'
import RegistrationSuccessfully from '../Components/RegisteredSuccessfully/RegisteredSuccessfully'
import history from './history'

const Routes = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/registeredSuccess" component={RegistrationSuccessfully}/>
      </Switch>
    </Router>
  );
};

export default Routes
