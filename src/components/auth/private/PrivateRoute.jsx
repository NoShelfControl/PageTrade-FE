import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthLoading, useCurrentUser } from '../../../context/AuthContext';
import Loading from '../../loading/Loading';

const PrivateRoute = props => {

  const currentUser = useCurrentUser();
  const loading = useAuthLoading();

  if(loading) return <Loading />;
  if(!currentUser) return <Redirect to="/signup" />;


  return <Route {...props} />;
};

export default PrivateRoute;
