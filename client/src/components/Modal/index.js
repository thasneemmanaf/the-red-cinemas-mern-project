import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './Modal.module.css';

function Modal({ showModal, setShowModal }) {
  const { t } = useTranslation();

  // Close error modal when user click close button or backdrop
  const closeModal = (e) => {
    if (e.target.id === 'modal' || e.target.id === 'close') {
      setShowModal({ status: false, type: '', subject: '', message: '' });
    }
  };

  // Conditionally render modal button based on type
  const buttonElement =
    showModal.type === 'sign_in' ? (
      <Link to="/signin">
        <button
          type="button"
          id="close"
          className={classes.modalBtn}
          onClick={closeModal}>
          {t(showModal.type)}
        </button>
      </Link>
    ) : (
      <button
        type="button"
        id="close"
        className={classes.modalBtn}
        onClick={closeModal}>
        {t(showModal.type)}
      </button>
    );

  return (
    <div id="modal" className={classes.modal} onClick={closeModal}>
      <div className={classes.modal_content}>
        <div className={classes.modal_header}>
          <h2>{t(showModal.subject)}</h2>
        </div>
        <div className={classes.modal_body}>
          <p>{t(showModal.message)}</p>
        </div>
        <div className={classes.modal_footer}>{buttonElement}</div>
      </div>
    </div>
  );
}

export default Modal;
