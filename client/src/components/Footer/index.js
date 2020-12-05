import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div
      className={`${classes.section} ${classes.footer}`}
      data-testid="footer">
      <ul className={classes.footer_links} data-testid="footer-links">
        <a href="/" className={`${classes.footer_link} ${classes.scroll_link}`}>
          Home
        </a>

        <a
          href="#about"
          className={`${classes.footer_link} ${classes.scroll_link}`}>
          About Us
        </a>

        <a
          href="#career"
          className={`${classes.footer_link} ${classes.scroll_link}`}>
          Career
        </a>

        <a
          href="#faq"
          className={`${classes.footer_link} ${classes.scroll_link}`}>
          FAQ
        </a>

        <a
          href="#news"
          className={`${classes.footer_link} ${classes.scroll_link}`}>
          News
        </a>
      </ul>

      <ul className={classes.footer_icons}>
        <li>
          <a
            href="https://www.facebook.com"
            target="-blank"
            className={classes.footer_icon}>
            <FaFacebook />
          </a>
        </li>

        <li>
          <a
            href="https://www.twitter.com"
            target="-blank"
            className={classes.footer_icon}>
            <FaTwitter />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com"
            target="-blank"
            className={classes.footer_icon}>
            <FaInstagram />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com"
            target="-blank"
            className={classes.footer_icon}>
            <FaLinkedin />
          </a>
        </li>
      </ul>

      <p className={classes.copyright}>
        copyright &copy; The RED Cinemas 2020
        <span />
        .all rights reserved
      </p>
    </div>
  );
};

export default Footer;
