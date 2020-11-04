import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';
import AccountMenu from '../AccountMenu';

function Navbar() {
  const [show, handleshow] = useState(false);
  const [accountShow, setAccountShow] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else handleshow(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <button
        type="button"
        style={{ background: 'none', border: 'none' }}
        onClick={onclickAccount}>
        <img
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="Netflix Logo"
        />
      </button>
      {accountShow && <AccountMenu />}
    </div>
  );
}

export default Navbar;
