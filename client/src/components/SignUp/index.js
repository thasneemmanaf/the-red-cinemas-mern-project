import React from 'react';
import classes from './SignUp.module.css';

function SignIn() {
  return (
    <div className={classes.form}>
      <form className={classes.login_form} action="./" method="POST">
        <div className={classes.login_form__content}>
          <div className={classes.login_form__header}>
            SignIn to your account
          </div>
          <input
            className={classes.login_form__input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={classes.login_form__input}
            type="email"
            name="email"
            placeholder="Email-id"
          />
          <input
            className={classes.login_form__input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            className={classes.login_form__input}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            pattern="[+]{46}[0-9]{11,14}"
            required
          />
          <button className={classes.login_form__button} type="submit">
            SignIn
          </button>
          <div className={classes.login_form__links}>
            <a className={classes.login_form__link} href="./">
              Forgot your password?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
