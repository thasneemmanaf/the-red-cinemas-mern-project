/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classes from './SignIn.module.css';
import validate from '../../utils/validateForm';
import useForm from '../../hooks/useForm';

const SignIn = ({ submitForm }) => {
  const {
    handleChange,
    handleSubmit,
    showLoginError,
    values,
    errors
  } = useForm(submitForm, validate);

  return (
    <div className={classes.form_content_right}>
      <form
        id="signin"
        onSubmit={handleSubmit}
        className={classes.form}
        noValidate>
        <h1>Sign In</h1>
        {showLoginError && <h4>Incorrect Password or email Id</h4>}
        <div className={classes.form_inputs}>
          <label className={classes.form_label}>Email</label>
          <input
            className={classes.form_input}
            type="email"
            name="emailId"
            placeholder="Enter your email"
            value={values.emailId}
            onChange={handleChange}
          />
          {errors.emailId && <p>{errors.emailId}</p>}
        </div>
        <div className={classes.form_inputs}>
          <label className={classes.form_label}>Password</label>
          <input
            className={classes.form_input}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className={classes.form_input_btn} type="submit">
          Sign In
        </button>
        <span className={classes.form_input_login}>
          New to MovieTime?
          <a href="/signup"> Sign up now</a>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
