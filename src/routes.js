import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "./pages/Main";
import Book from './pages/Book';
import Add from './pages/Add';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/book" component={Book} />
        <Route path="/add" component={Add} />
      </Switch>
    </BrowserRouter>
  );
}
