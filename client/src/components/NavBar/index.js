import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';
import AccountMenu from '../AccountMenu';
import LanguageSelector from '../LanguageSelector';
import movieTimeImg from '../../images/movie-time.png';
// import LanguageSelector2 from '../LanguageSelector2';

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
        // src="https://img4.apk.tools/img/Bx8tcZ3p9XUut2KgVcj1kCC9qb5mDnz2UiE2nxs9oTtQOAAdsXPMkyDVNjner5c2-zzN=s300"
        src={movieTimeImg}
        alt="Netflix Logo"
      />
      <div className="LanguageSelector">
        <LanguageSelector
          accountShow={accountShow}
          setAccountShow={setAccountShow}
        />
        {/* <LanguageSelector2 /> */}
      </div>

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
