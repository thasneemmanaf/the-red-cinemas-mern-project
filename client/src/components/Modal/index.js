/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Modal.module.css';

function Modal({ showModal, setShowModal }) {
  // Close error modal when user click close button or backdrop
  const closeModal = (e) => {
    if (e.target.id === 'modal' || e.target.id === 'close') {
      setShowModal({ status: false, type: '', subject: '', message: '' });
    }
  };

  // Conditionally render modal button based on type
  const buttonElement =
    showModal.type === 'SIGNIN' ? (
      <Link to="/signin">
        {' '}
        <button
          type="button"
          id="close"
          className={classes.modalBtn}
          onClick={closeModal}>
          {showModal.type}
        </button>
      </Link>
    ) : (
      <button
        type="button"
        id="close"
        className={classes.modalBtn}
        onClick={closeModal}>
        {showModal.type}
      </button>
    );

  return (
    <div id="modal" className={classes.modal} onClick={closeModal}>
      <div className={classes.modal_content}>
        <div className={classes.modal_header}>
          <h2>{showModal.subject}</h2>
        </div>
        <div className={classes.modal_body}>
          <p>{showModal.message}</p>
        </div>
        <div className={classes.modal_footer}>{buttonElement}</div>
      </div>
    </div>
  );
}

export default Modal;
