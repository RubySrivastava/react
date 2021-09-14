import React from 'react';
import { Switch, Route, Redirect, useLocation } from "react-router-dom"

import logo from './logo.png';
import './App.css';
import Body from './Body';
import Assignment from './Assignment';

function App() {
  const location = useLocation()
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Switch location={location}>
        <Route path="/assignment" component={Assignment} />
        <Route path="/" component={Body} />
      </Switch>
    </div>
  );
}

export default App;
