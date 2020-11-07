import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Banner from './components/Banner';
import './App.css';
import Row from './components/Row';
import ExploreAll from './components/ExploreAll';
// import Booking from './components/Booking';
import ShowTimings from './components/ShowTimings';
import ReservationProvider from './Store/ReservationProvider';
import SignIn from './components/SignIn';
// import SeatLayout from './components/SeatLayout';
import SeatLayout2 from './components/SeatLayout2';

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
            <Route path="/signin" exact component={SignIn} />
            <Route path="/seatlayout" exact component={SeatLayout2} />
            <Route path="/showtimings/:movieId" exact component={ShowTimings} />
          </Switch>
        </div>
      </ReservationProvider>
    </BrowserRouter>
  );
}

export default App;
