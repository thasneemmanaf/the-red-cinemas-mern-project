import React, { useState, useEffect, useCallback } from 'react';

import './Navbar.css';
import AccountMenu from '../AccountMenu';
import LanguageSelector from '../LanguageSelector';
// import movieTimeImg from '../../images/dream-theater.png';
import axios from '../../axios';

function Navbar() {
  const [show, handleshow] = useState(false);
  const [accountShow, setAccountShow] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else handleshow(false);
  }, []);

  // Get user from DB based on Token when App is refreshed
  useEffect(() => {
    async function fetchUser() {
      try {
        await axios.get('user/signin');
      } catch (err) {
        console.log(err);
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
    </div>
  );
}

export default Navbar;
