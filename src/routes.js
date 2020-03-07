import React from 'react'

import { Switch, Route } from 'react-router-dom';

import Main from "./pages/Main";
import Book from './pages/Book';
import Add from './pages/Add';
import Next from './pages/Next';

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/book" component={Book} />
        <Route path="/add" component={Add} />
        <Route path="/next" component={Next} />
      </Switch>
  );
}
