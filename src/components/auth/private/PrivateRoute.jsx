import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthLoading, useCurrentUser } from '../../../context/AuthContext';

const PrivateRoute = props => {

    const currentUser = useCurrentUser();
    const loading = useAuthLoading();

    if (loading) return <h1>Loading...</h1>;
    if (!currentUser) return <Redirect to="/login" />;


    return <Route {...props} />;
};

export default PrivateRoute;