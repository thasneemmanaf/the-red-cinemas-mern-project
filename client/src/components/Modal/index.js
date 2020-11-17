/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import classes from './Modal.module.css';

function Modal({ type, subject, message, setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={classes.modal}>
      <div className={classes.modal_content}>
        <div className={classes.modal_header}>
          <span className={classes.close} onClick={closeModal}>
            &times;
          </span>
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
