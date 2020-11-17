import React from 'react';
import classes from './SignUp.module.css';

function SignUp() {
  return (
    <div className={classes.form}>
      <form className={classes.signup_form} action="./" method="POST">
        <div className={classes.signup_form__content}>
          <div className={classes.signup_form__header}>
            Signup to your account
          </div>
          <input
            className={classes.signup_form__input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={classes.signup_form__input}
            type="email"
            name="email"
            placeholder="Email-id"
          />
          <input
            className={classes.signup_form__input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            className={classes.signup_form__input}
            type="password"
            name="password_confirm"
            placeholder="Confirm password"
          />
          <input
            className={classes.signup_form__input}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            pattern="[+]{46}[0-9]{11,14}"
            required
          />
          <button className={classes.signup_form__button} type="submit">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
