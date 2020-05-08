import React from 'react'
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';

import Main from "../pages/Main";
import Details from '../pages/Details';


export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/main" component={Main} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/details/:id/" component={Details} isPrivate />
        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
  );
}
