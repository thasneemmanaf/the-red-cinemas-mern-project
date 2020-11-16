import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AccountMenu.module.css';

function AccountMenu() {
  return (
    <div className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/signin">Sign In</NavLink>

          {/* <a href="#bjfghhf"></a> */}
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
          {/* <a href="#ffg">Sign Up</a> */}
        </li>
      </ul>
    </div>
  );
}

export default AccountMenu;
