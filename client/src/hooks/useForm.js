/* eslint-disable no-inner-declarations */
import { useState, useEffect } from 'react';
import axios from '../axios';

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
            await axios({
              method: 'post',
              url: '/user/signup',
              data: values
            });
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
            } else {
              setShowLoginError(false);
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
