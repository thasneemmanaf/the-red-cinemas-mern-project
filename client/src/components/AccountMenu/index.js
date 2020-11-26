import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AccountMenu.module.css';
import AuthContext from '../../Store/AuthContext';
import ReservationContext from '../../Store/ReservationContext';

function AccountMenu() {
  const [authStatus] = useContext(AuthContext);
  const [reservation] = useContext(ReservationContext);
  return (
    <div className={classes.nav}>
      <ul>
        {authStatus.isLoggedIn && <li>{`Hi ${reservation.name}`}</li>}
        {authStatus.isLoggedIn && (
          <li>
            <NavLink to="/">Sign Out</NavLink>
          </li>
        )}
        {!authStatus.isLoggedIn && (
          <li>
            <NavLink to="/signin">Sign In</NavLink>
          </li>
        )}
        {!authStatus.isLoggedIn && (
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default AccountMenu;
