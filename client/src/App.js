import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import './App.css';
import Row from './components/Row';
import PlayingNow from './components/PlayingNow';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" exact component={NavBar} />
        <Route path="/" exact component={Banner} />
        <Route
          path="/"
          exact
          render={(props) => <Row {...props} title="playing-now" />}
        />
        <Route
          path="/"
          exact
          render={(props) => <Row {...props} title="coming-soon" />}
        />
        <Switch>
          <Route path="/playing-now" exact component={PlayingNow} />
        </Switch>
        {/* <NavBar />
        <Banner />
        <Row title="playing-now" />
        <Row title="coming-soon" /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
