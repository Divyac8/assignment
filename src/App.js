import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './customer';
import {  Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className = "App" >
    <Switch>
      <Route path ="/"component={Customer}></Route>
    </Switch>
</div>
  );
}

export default App;
