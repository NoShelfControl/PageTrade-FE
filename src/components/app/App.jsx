import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import AuthProvider from '../auth/provider/AuthProvider';
import Login from '../auth/login/Login';
import PrivateRoute from '../auth/private/PrivateRoute';
import Signup from '../auth/signup/Signup';
import Profile from '../profile/Profile';
import Home from '../home/Home';
import Library from './Library/Library';

export default function App() {
  return (
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/profile" component={Profile} />
        {/* <Route exact path="/about" component={About} /> */}
      </Switch>
    </AuthProvider>
  );
}
