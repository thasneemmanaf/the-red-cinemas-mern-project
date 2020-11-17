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
          <h2>{subject}</h2>
        </div>
        <div className={classes.modal_body}>
          <p>{message}</p>
        </div>
        <div className={classes.modal_footer}>
          <button
            type="button"
            id="close"
            className={classes.modalBtn}
            onClick={closeModal}>
            {type}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
