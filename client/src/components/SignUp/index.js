/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classes from './SignUp.module.css';
import validate from '../../utils/validateForm';
import useForm from '../../hooks/useForm';

const SignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className={classes.form_content_right}>
      <form onSubmit={handleSubmit} className={classes.form} noValidate>
        <h1>Let Us Get started! Create your account</h1>
        <div className={classes.form_inputs}>
          <label className={classes.form_label}>Name</label>
          <input
            className={classes.form_input}
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className={classes.form_inputs}>
          <label className={classes.form_label}>Email</label>
          <input
            className={classes.form_input}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
        <div className={classes.form_inputs}>
          <label className={classes.form_label}>Confirm Password</label>
          <input
            className={classes.form_input}
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className={classes.form_input_btn} type="submit">
          Sign Up
        </button>
        <span className={classes.form_input_login}>
          Already have an account?
          <a href="/signin"> Sign in</a>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
