  import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import AuthProvider from '../auth/provider/AuthProvider';
import Login from '../auth/login/Login';
import PrivateRoute from '../auth/private/PrivateRoute';
import Signup from '../auth/signup/Signup';
import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';

export default function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </AuthProvider>
  );
}