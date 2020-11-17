import React from 'react';

import classes from './Modal.module.css';

function Modal({ type, subject, message }) {
  return (
    <div className={classes.modal}>
      <div className={classes.modal_content}>
        <div className={classes.modal_header}>
          <span className={classes.close}>&times;</span>
          <h2>{subject}</h2>
        </div>
        <div className={classes.modal_body}>
          <p>{message}</p>
        </div>
        <div className={classes.modal_footer}>
          <h3>{type}</h3>
        </div>
      </div>
    </div>
  );
}

export default Modal;
