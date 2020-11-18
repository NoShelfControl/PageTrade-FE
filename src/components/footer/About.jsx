/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';

export default function About() {
  return (
    <main>
      <h1>MEET THE TEAM</h1>
      <section>
        <figure>
          <h2>Ryan</h2>
          <img alt="Ryan Diffenbaugh" src="ryan.png"/>
          <p>Favorite book: Broken Monsters by Lauren Buekes</p>
          <section id={styles.profilelinks}>
            <Link to="https://github.com/Ryan-Diff">
              <img className={styles.icon} alt="github icon" src="github.png"/>
            </Link>
            <Link to="https://www.linkedin.com/in/ryan-diffenbaugh-a3552b1a8/">
              <img className={styles.icon} alt="linkedin icon" src="linkedin.png" />
            </Link>
          </section>
        </figure>

        <figure>
          <h2>Heather</h2>
          <img alt="Heather Peterson" src="heather.png"/>
          <p>Favorite book: Poisonwood Bible</p>
          <section id={styles.profilelinks}>
            <Link to="https://github.com/hpeterson462">
              <img className={styles.icon} alt="github icon" src="github.png"/>
            </Link>
            <Link to="https://www.linkedin.com/in/hpeterson462/">
              <img className={styles.icon} alt="linkedin icon" src="linkedin.png" />
            </Link>
          </section>
        </figure>

        <figure>
          <h2>Charlie</h2>
          <img alt="Charlie Smith" src="charles.png"/>
          <p>Favorite book:</p>
          <section id={styles.profilelinks}>
            <Link to="https://github.com/internetcharles">
              <img className={styles.icon} alt="github icon" src="github.png"/>
            </Link>
            <Link to="https://www.linkedin.com/in/charlie-smith-b7840b1a5/">
              <img className={styles.icon} alt="linkedin icon" src="linkedin.png" />
            </Link>
          </section>
        </figure>

        <figure>
          <h2>Brooke</h2>
          <img alt="Brooke" src="brooke.png"/>
          <p>Favorite book:</p>
          <section id={styles.profilelinks}>
            <Link to="https://www.linkedin.com/in/brookeperkins/">
              <img className={styles.icon} alt="github icon" src="github.png"/>
            </Link>
            <Link to="https://github.com/brookeperkins">
              <img className={styles.icon} alt="linkedin icon" src="linkedin.png" />
            </Link>
          </section>
        </figure>
      </section>
    </main>
  );
}
