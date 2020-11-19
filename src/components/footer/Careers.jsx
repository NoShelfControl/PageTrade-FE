/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import styles from './Footer.css';

export default function Careers() {
  return (
    <section className={styles.Careers}>
      <h1>Careers</h1>         
      <section id={styles.thiscontainer}>
        <figure>
          <h2>Wanted: Opinionated English Major</h2>
          <p>PageTrade is seeking an over-qualified, underpaid English major
            to join our team. <br />
          <br/>Do you: 
          <ul>
            <li>Have a close relationship with Lacan and Foucault?</li>
            <li>Have a strong opinion about David Foster Wallace?</li>
            <li>Really feel like you just GET Holden Caulfield?</li>
          </ul>
          Then drop us a line! Serious inquiries only.
          </p>
          <section id={styles.profilelinks}>
            <Link to="https://github.com/Ryan-Diff">
            </Link>
            <Link to="https://www.linkedin.com/in/ryan-diff/">
            </Link>
          </section>
        </figure>
      </section>
      <Footer />
    </section>
  );
}
