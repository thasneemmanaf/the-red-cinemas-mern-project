import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Form.module.css';
import FormSignup from '../../components/SignUp';
import FormSignin from '../../components/SignIn';
import formImage from '../../images/formImg.jpg';

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
          <img className={classes.form_img} src={formImage} alt="spaceship" />
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
