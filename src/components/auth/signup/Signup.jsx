/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { useSignup } from '../../../context/AuthContext';
import styles from './Signup.css';
import logo from '../../../assets/logo.png';
import signupgraphic from '../../../assets/signupgraphic.png';
import { useGlobalActions } from '../../../hooks/ProfileHook';
import Loading from '../../loading/Loading';
import { globalFeedSorter } from '../../../utils/feed-sorter';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { globalActions, loadingActions } = useGlobalActions();
  const signup = useSignup();
  const sortedActions = globalFeedSorter(globalActions);

  const handleSubmit = event => {
    event.preventDefault();
    signup(email, password);
  };
  
  if(loadingActions) return <Loading />;

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
          <ul className={styles.feedList}>
            {sortedActions.map((action, idx) => {
              return <li key={idx}>{action}</li>;
            })}
          </ul>
        </h1>
        <img id={styles.signupgraphic} src={signupgraphic} />
      </section>
    </main>
  );
};

export default Signup;
