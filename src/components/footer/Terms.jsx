/* eslint-disable max-len */
import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Footer.css';

export default function Terms() {
  return (
    <section>
      <Header />
      <section className={styles.Terms}>
        <h1>TERMS OF SERVICE</h1>         
        <section id={styles.thatcontainer}>

          <figure>
            <h2>AS A PAGETRADE USER, YOU HEREBY AGREE TO THE FOLLOWING:</h2>
            <p>Wow, are you really reading this? Good for you! We only pretend to read stuff like this... which is why 
            we also pretended we really wrote something! Oh, by the way, we own all the content you make on this app.
            </p>
          </figure>
        
        </section>
        <Footer />
      </section>
    </section>
  );
}
