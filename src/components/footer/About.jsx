/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Footer.css';
import Ryan from '../../assets/ryan.jpg';
import Heather from '../../assets/heather.jpg';
import Charlie from '../../assets/charlie.png';
import Brooke from '../../assets/brooke.jpg';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';

export default function About() {
  return (
    <section>
      <Header />
      <h1>MEET THE TEAM</h1>
      <section className={styles.About}>
        <figure>
          <h2>Ryan</h2>
          <img alt="Ryan Diffenbaugh" src={Ryan} />
          <p>
            Favorite book: <br /> Broken Monsters <br /> by <br /> Lauren Buekes
          </p>
          <section id={styles.profilelinks}>
            <Link to="https://github.com/Ryan-Diff">
              <img className={styles.icon} alt="github icon" src={Github} />
            </Link>
            <Link to="https://www.linkedin.com/in/ryan-diff/">
              <img className={styles.icon} alt="linkedin icon" src={Linkedin} />
            </Link>
          </section>
        </figure>

        <figure>
          <h2>Heather</h2>
          <img alt="Heather Peterson" src={Heather} />
          <p>
            Favorite book: <br /> The Poisonwood Bible <br /> by <br /> Barbara
            Kingsolver
          </p>
          <section id={styles.profilelinks}>
            <Link to="https://github.com/hpeterson462">
              <img className={styles.icon} alt="github icon" src={Github} />
            </Link>
            <Link to="https://www.linkedin.com/in/hpeterson462/">
              <img className={styles.icon} alt="linkedin icon" src={Linkedin} />
            </Link>
          </section>
        </figure>

        <figure>
          <h2>Charlie</h2>
          <img alt="Charlie Smith" src={Charlie} />
          <p>
            Favorite book: <br /> Hologram For A King <br /> by <br /> Dave
            Eggers
          </p>
          <section id={styles.profilelinks}>
            <Link to="https://github.com/internetcharles">
              <img className={styles.icon} alt="github icon" src={Github} />
            </Link>
            <Link to="https://www.linkedin.com/in/charlie-smith-b7840b1a5/">
              <img className={styles.icon} alt="linkedin icon" src={Linkedin} />
            </Link>
          </section>
        </figure>

        <figure>
          <h2>Brooke</h2>
          <img alt="Brooke Perkins" src={Brooke} />
          <p>
            Favorite book: <br /> The Shipping News <br /> by <br /> Annie
            Proulx
          </p>
          <section id={styles.profilelinks}>
            <Link to="https://github.com/brookeperkins">
              <img className={styles.icon} alt="github icon" src={Github} />
            </Link>
            <Link to="https://www.linkedin.com/in/brookeperkins/">
              <img className={styles.icon} alt="linkedin icon" src={Linkedin} />
            </Link>
          </section>
        </figure>
      </section>
      <Footer />
    </section>
  );
}
