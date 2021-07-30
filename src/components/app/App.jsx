import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthProvider from '../auth/provider/AuthProvider';
import Login from '../auth/login/Login';
import PrivateRoute from '../auth/private/PrivateRoute';
import Signup from '../auth/signup/Signup';
import Profile from '../profile/Profile';
import Home from '../home/Home';
import Library from '../Library/Library';
import About from '../footer/About';
import Careers from '../footer/Careers';
import Terms from '../footer/Terms';

export default function App() {
  return (
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/library/" component={Library} />
        <Route exact path="/profile/:userId" component={Profile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/terms" component={Terms} />
      </Switch>
    </AuthProvider>
  );
}
