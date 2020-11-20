import React, { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { getVerify, 
  postLogin, 
  postSignup, 
  updateUser } from '../../../services/auth';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const signup = (email, password) => {

    postSignup(email, password)
      .then(user => setCurrentUser(user))
      .then(() => history.push('/'))
      .finally(() => setLoading(false));
  };

  const login = (email, password) => {
    postLogin(email, password)
      .then(user => setCurrentUser(user))
      .then(() => history.push('/'))
      .finally(() => setLoading(false));
  };

  const update = (user) => {
    updateUser(user)
      .then(user => setCurrentUser(user));
  };

  useEffect(() => {
    getVerify()
      .then(user => setCurrentUser(user))
      .finally(() => setLoading(false));
  }, []);

  const authState = {
    currentUser,
    loading,
    signup,
    update,
    login
  };

  return (
    <AuthContext.Provider value={authState}>
      {children}   
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any
} ;

export default AuthProvider;
