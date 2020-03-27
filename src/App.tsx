import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from './route';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          {
            routes.map((prop, key) => {
              return <Route path={prop.path} key={key} component={prop.component} />;
            })
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
