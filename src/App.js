import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage.js';
import EmprestimoPage from './pages/EmprestimoPage.js';
import ExtratoPage from './pages/ExtratoPage';
import DepositoPage from './pages/DepositoPage';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/emprestimo" exact={true} component={EmprestimoPage} />
            <Route path="/extrato" exact={true} component={ExtratoPage} />
            <Route path="/manutençao" exact={true} component={HomePage} />
            <Route path="/deposito" exact={true} component={DepositoPage} />
        </div>
    </ Router>
    );
  }
}

export default App;
