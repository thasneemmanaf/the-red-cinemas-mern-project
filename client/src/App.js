import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import './App.css';
import Row from './components/Row';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title="Now Playing" />
      <Row title="Coming Soon" />
    </div>
  );
}

export default App;
