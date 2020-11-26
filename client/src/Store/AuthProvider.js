import React, { useReducer } from 'react';
import AuthContext from './AuthContext';

const initialState = {
  isLoggedIn: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isLoggedIn: action.payload
      };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [authStatus, dispatchAuth] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={[authStatus, dispatchAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
