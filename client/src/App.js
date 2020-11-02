import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Banner from './components/Banner';
import './App.css';
import Row from './components/Row';
import ExploreAll from './components/ExploreAll';
import Booking from './components/Booking';
import ReservationProvider from './Store/ReservationProvider';

function App() {
  return (
    <BrowserRouter>
      <ReservationProvider>
        <div className="app">
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
            <Route path="/booking" exact component={Booking} />
          </Switch>
        </div>
      </ReservationProvider>
    </BrowserRouter>
  );
}

export default App;
