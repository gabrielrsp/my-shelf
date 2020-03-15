import React from 'react'

import { Switch, Route } from 'react-router-dom';

import Main from "./pages/Main";
import Details from './pages/Details';
import Add from './pages/Add';
import Next from './pages/Next';

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/add" component={Add} />
        <Route path="/next" component={Next} />
        <Route path="/details/:name/" component={Details} />
      </Switch>
  );
}
