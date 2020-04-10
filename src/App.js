import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
