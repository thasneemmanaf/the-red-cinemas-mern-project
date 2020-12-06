import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Form.module.css';
import FormSignup from '../../components/SignUp';
import FormSignin from '../../components/SignIn';

const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className={classes.form_container}>
        <NavLink to="/" className={classes.closeLink}>
          <span className={classes.close_btn}>×</span>
        </NavLink>
        <div className={classes.form_content_left}>
          <img
            className={classes.form_img}
            src="https://images.pexels.com/photos/1769413/pexels-photo-1769413.jpeg?cs=srgb&dl=pexels-alex-powell-1769413.jpg&fm=jpg"
            alt="spaceship"
          />
        </div>
        {props.match.path === '/signup' ? (
          <FormSignup submitForm={submitForm} isSubmitted={isSubmitted} />
        ) : (
          <FormSignin isSubmitted={isSubmitted} />
        )}
      </div>
    </>
  );
};

export default Form;
