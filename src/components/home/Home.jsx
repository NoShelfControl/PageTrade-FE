import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default function Home() {

  return (
    <div className={styles.Home}>
      <span className={styles.NavButtonToggle}></span>
      <header>
        <button>Home</button>
        <button>Library</button>
        <button>Requests</button>
        <button>Profile</button>
      </header>
      <main className={styles.Main}>
        <section className={styles.BookSection}>
          <div>Trade</div>
          <div>Wish List</div>
        </section>
        <div>Feed</div>
      </main>
      <footer>
        <Link to={`/about`}>About</Link>
      </footer>
    </div>
  )
}

