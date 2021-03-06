import React from 'react';
import ReactDOM from 'react-dom';

import './services/database.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GlobalStyle } from './global.js'

import Initial from './pages/Initial/index.js'
import Products from './pages/Products/index.js'
import FeedBack from './pages/FeedBack/index.js'
import Partners from './pages/Partners/index.js'
import Trolley from './pages/Trolley/index.js'
import Pendente from './pages/Pendente/index.js'

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Initial} />
      <Route path="/produtos" component={Products} />
      <Route path="/avaliações" component={FeedBack} />
      <Route path="/parceiros" component={Partners} />
      <Route path="/carrinho" component={Trolley} />
      <Route path="/pendente" component={Pendente} />
    </Switch>
  </Router>,
  document.getElementById('root')
);