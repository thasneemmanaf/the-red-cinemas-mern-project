import React, { useState, useContext, useEffect, useCallback } from 'react';

import './Navbar.css';
import AccountMenu from '../AccountMenu';
import LanguageSelector from '../LanguageSelector';
import Modal from '../Modal';
import axios from '../../axios';
import ReservationContext from '../../Store/ReservationContext';
import AuthContext from '../../Store/AuthContext';

function Navbar() {
  const [show, handleshow] = useState(false);
  const [accountShow, setAccountShow] = useState(false);
  const [, dispatch] = useContext(ReservationContext);
  const [, dispatchAuth] = useContext(AuthContext);
  const [showModal, setShowModal] = useState({
    status: false,
    type: '',
    subject: '',
    message: ''
  });

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else handleshow(false);
  }, []);

  // Get user from DB based on Token when App is refreshed
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get('user/signin');

        // Persist login state if user is already logged in and has valid token
        dispatch({
          type: 'ADD_EMAIL_ID',
          payload: response.data.data.user.emailId
        });

        dispatch({
          type: 'ADD_NAME',
          payload: response.data.data.user.name
        });
        dispatchAuth({ type: 'LOGIN_SUCCESS', payload: true });
      } catch {
        dispatchAuth({ type: 'LOGIN_SUCCESS', payload: false });
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // To dislay signin and signup
  const onclickAccount = () => {
    if (!accountShow) {
      setAccountShow(true);
    } else {
      setAccountShow(false);
    }
  };

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="nav_logo"
        // src={movieTimeImg}
        src="https://upload.wikimedia.org/wikipedia/commons/c/c6/The_Red_logo_-_Red_Velvet.png"
        alt="The-RED Cinemas Logo"
      />

      <div className="LanguageSelector">
        <LanguageSelector
          accountShow={accountShow}
          setAccountShow={setAccountShow}
        />
      </div>

      <button
        type="button"
        style={{ background: 'none', border: 'none' }}
        onClick={onclickAccount}
        className="account_style">
        <img
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="Account Logo"
        />
      </button>
      {accountShow && <AccountMenu setAccountShow={setAccountShow} />}
      {showModal.status && (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default Navbar;
