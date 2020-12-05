import React from 'react';
import classes from './SignUp.module.css';
import validate from '../../utils/validateForm';
import useForm from '../../hooks/useForm';

const SignUp = ({ submitForm, isSubmitted }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className={classes.form_content_right}>
      <form
        id="signup"
        onSubmit={handleSubmit}
        className={classes.form}
        noValidate>
        <h1>Let Us Get started! Create your account</h1>
        <div className={classes.form_inputs}>
          <label className={classes.form_label}>Name</label>
          <input
            className={classes.form_input}
            type="text"
            name="name"
            placeholder="Enter your username"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
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
        <div className={classes.form_inputs}>
          <label className={classes.form_label}>Confirm Password</label>
          <input
            className={classes.form_input}
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button
          className={classes.form_input_btn}
          type="submit"
          disabled={isSubmitted}>
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
