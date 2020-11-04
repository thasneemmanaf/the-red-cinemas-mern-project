import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AccountMenu.module.css';

function AccountMenu() {
  return (
    <div className={classes.nav}>
      <ul>
        <li>
          <Link to="/signin">Sign In</Link>
          {/* <a href="#bjfghhf"></a> */}
        </li>
        <li>
          <Link to="/signin">Sign Up</Link>
          {/* <a href="#ffg">Sign Up</a> */}
        </li>
      </ul>
    </div>
  );
}

export default AccountMenu;
