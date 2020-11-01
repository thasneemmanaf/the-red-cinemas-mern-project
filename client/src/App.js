import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import './App.css';
import Row from './components/Row';
import ExploreAll from './components/ExploreAll';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" exact component={NavBar} />
        <Route path="/" exact component={Banner} />
        <Route
          path="/"
          exact
          render={(props) => <Row {...props} type="playingnow" />}
        />
        <Route
          path="/"
          exact
          render={(props) => <Row {...props} type="comingsoon" />}
        />
        <Switch>
          <Route path="/playingnow" exact component={ExploreAll} />
          <Route path="/comingsoon" exact component={ExploreAll} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
