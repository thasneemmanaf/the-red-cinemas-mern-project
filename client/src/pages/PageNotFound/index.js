import React from 'react';
import classes from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <div className={classes.outer_container}>
      <div className={classes.container}>
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We cannot find the page you are looking for.</p>
        <a href="http://theredcinemas.herokuapp.com/">Go back home</a>
      </div>
    </div>
  );
}

export default PageNotFound;
