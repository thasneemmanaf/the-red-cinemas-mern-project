import React from 'react';
import classes from './Form.module.css';

const FormSuccess = () => {
  return (
    <div className={classes.form_content_right}>
      <h1 className={classes.form_success}>We have received your request!</h1>
      <img
        className={classes.form_img_2}
        src="img/img-3.svg"
        alt="success_pic"
      />
    </div>
  );
};

export default FormSuccess;
