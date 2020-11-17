import React from 'react';
import { useState } from 'react';
import { useLogin } from '../../../context/AuthContext';
import logingraphic from '../../../assets/logingraphic.png';
import logo from '../../../assets/logo.png';
import styles from './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <main>
      <section className={styles.authcontainer}>
        <img id={styles.logo} src={logo} />
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
          <button>Log In</button>
        </form>
        <img id={styles.logingraphic} src={logingraphic} />
      </section>
    </main>
  );
};

export default Login;
