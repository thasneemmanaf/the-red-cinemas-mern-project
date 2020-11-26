/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AccountMenu.module.css';
import AuthContext from '../../Store/AuthContext';
import ReservationContext from '../../Store/ReservationContext';

function AccountMenu({ setAccountShow }) {
  const [authStatus, dispatchAuth] = useContext(AuthContext);
  const [reservation] = useContext(ReservationContext);

  const handleSignOut = () => {
    dispatchAuth({ type: 'LOGOUT_SUCCESS', payload: false });
    setAccountShow(false);
  };
  return (
    <div className={classes.nav}>
      <ul>
        {authStatus.isLoggedIn && <li>{`Hi ${reservation.name}`}</li>}
        {authStatus.isLoggedIn && (
          <li className={classes.sign_out} onClick={handleSignOut}>
            Sign Out
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
