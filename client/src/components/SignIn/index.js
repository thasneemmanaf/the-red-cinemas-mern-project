import React from 'react';
import classes from './SignIn.module.css';

function SignIn() {
  return (
    <div className={classes.form}>
      <form className={classes.signin_form} action="./" method="POST">
        <div className={classes.signin_form__content}>
          <div className={classes.signin_form__header}>
            Signin to your account
          </div>
          <input
            className={classes.signin_form__input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={classes.signin_form__input}
            type="email"
            name="email"
            placeholder="Email-id"
          />
          <input
            className={classes.signin_form__input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            className={classes.signin_form__input}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            pattern="[+]{46}[0-9]{11,14}"
            required
          />
          <button className={classes.signin_form__button} type="submit">
            SignIn
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
