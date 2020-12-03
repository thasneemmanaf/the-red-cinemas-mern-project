/* eslint-disable react/jsx-indent */
/* eslint-disable no-inner-declarations */
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import axios from '../axios';
import ReservationContext from '../Store/ReservationContext';
import AuthContext from '../Store/AuthContext';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    emailId: '',
    password: '',
    confirmPassword: ''
  });

  const [showLoginError, setShowLoginError] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, dispatch] = useContext(ReservationContext);
  const [, dispatchAuth] = useContext(AuthContext);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values, e.target.id));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // callback();

      if (values.name) {
        async function userSignUp() {
          try {
            const response = await axios({
              method: 'post',
              url: '/user/signup',
              data: values
            });
            dispatch({
              type: 'ADD_EMAIL_ID',
              payload: response.data.data.user.emailId
            });
            dispatch({
              type: 'ADD_NAME',
              payload: response.data.data.user.name
            });
            dispatchAuth({ type: 'SIGNUP_SUCCESS', payload: true });
            history.goBack();
          } catch (err) {
            console.log(err);
          }
        }
        userSignUp();
      } else {
        async function userSignIn() {
          try {
            const response = await axios({
              method: 'post',
              url: '/user/signin',
              data: values
            });
            if (response.data.status === 'unauthorized') {
              setShowLoginError(true);
              dispatchAuth({ type: 'LOGOUT_SUCCESS', payload: false });
            } else {
              setShowLoginError(false);
              dispatch({
                type: 'ADD_EMAIL_ID',
                payload: response.data.data.user.emailId
              });

              dispatch({
                type: 'ADD_NAME',
                payload: response.data.data.user.name
              });
              dispatchAuth({ type: 'LOGIN_SUCCESS', payload: true });
              history.goBack();
            }
          } catch (err) {
            console.log(err);
          }
        }
        userSignIn();
      }
    }
  }, [errors, isSubmitting]);

  return { handleChange, handleSubmit, showLoginError, values, errors };
};

export default useForm;
