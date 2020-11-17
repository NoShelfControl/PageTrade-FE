/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { useSignup } from '../../../context/AuthContext';
import styles from './Signup.css';
import logo from '../../../assets/logo.png';
import signupgraphic from '../../../assets/signupgraphic.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = useSignup();

  const handleSubmit = event => {
    event.preventDefault();
    signup(email, password);
  };

  return (
    <main>
      <section className={styles.authcontainer}>
        <img id={styles.logo} src={logo} />
        <h1 id={styles.introtext}> 
          <span>Connect with readers</span>
          <span>Connect with books</span>
        Join our community today
          <form id={styles.signupform} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button>Join Now</button>
          </form>
        </h1>
        <img id={styles.signupgraphic} src={signupgraphic} />
      </section>
    </main>
  );
};

export default Signup;
