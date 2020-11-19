import React from 'react';
import validate from '../../utils/validateForm';
import classes from './SignUp.module.css';
import useForm from '../../hooks/useForm';

function SignUp() {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  return (
    <div className={classes.form}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className={classes.signup_form}
        action="./"
        method="POST">
        <div className={classes.signup_form__content}>
          <div className={classes.signup_form__header}>
            Signup to your account
          </div>
          <input
            className={classes.signup_form__input}
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
          <input
            className={classes.signup_form__input}
            type="email"
            name="email"
            placeholder="Email-id"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            className={classes.signup_form__input}
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
          <input
            className={classes.signup_form__input}
            type="password"
            name="password2"
            placeholder="Confirm password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
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
