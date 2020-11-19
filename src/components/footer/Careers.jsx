/* eslint-disable max-len */
import React from 'react';
import Footer from '../footer/Footer';
import styles from './Footer.css';

export default function Careers() {
  return (
    <section className={styles.Careers}>
      <h1>CAREERS</h1>         
      <section id={styles.thiscontainer}>
        <figure>
          <h2>English Major</h2>
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
        </figure>

        <figure>
          <h2>Office Pets</h2>
          <p>PageTrade is seeking to incorporate more animals in our office setting. <br />
            <br/>Qualifications: 
            <ul>
              <li>Cute face and demeanor</li>
              <li>Bipedals through quadrupedals only, please</li>
              <li>Bonus: knows tricks</li>
            </ul>
          Preference given to current or previously internet-famous animals.  
          </p>
        </figure>

        <figure>
          <h2>Junior Dev</h2>
          <p>PageTrade is seeking to fill a junior role on our team. <br />
            <br/>Qualifications: 
            <ul>
              <li>10 years of progressive experience</li>
              <li>Robust portfolio demonstrating complex, algorithmic thinking</li>
              <li>Team-player with a can-do attitude!</li>
            </ul>
          Send resume & $1000 application fee to jobs@pagetrade.com.
          </p>
        </figure>

      </section>
      <Footer />
    </section>
  );
}
