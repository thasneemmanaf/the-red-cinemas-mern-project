/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import classes from './Modal.module.css';

function Modal({ type, subject, message, setShowModal }) {
  // Close error modal when user click close button or backdrop
  const closeModal = (e) => {
    if (e.target.id === 'modal' || e.target.id === 'close') {
      setShowModal(false);
    }
  };
  return (
    <div id="modal" className={classes.modal} onClick={closeModal}>
      <div className={classes.modal_content}>
        <div className={classes.modal_header}>
          <span id="close" className={classes.close} onClick={closeModal}>
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
