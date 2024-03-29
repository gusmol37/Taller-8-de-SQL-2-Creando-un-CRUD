/**
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-30
 */

import React from "react";
import Contacto from "./page/Contacto";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
         <Route exact path="/" component={Contacto} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
