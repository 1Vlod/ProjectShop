import React from 'react'
import { Switch, Route } from "react-router-dom"
import logo from './logo.svg';
import { Counter } from './features/counter/Counter'
import './App.css';

import StartPage from "./pages/StartPage"
import Shop from "./pages/ShopPage"

function App () {
  return (
    <Switch>
      <Route path="/:any">
        <Shop/>
      </Route>
      <Route path="/">
        <StartPage/>
      </Route>
    </Switch>
  )
}

function ReduxApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
