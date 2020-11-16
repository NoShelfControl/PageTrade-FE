import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Sidebar from '../sidebar/Sidebar';

export default function Home() {

  return (
    <div className={styles.Home}>
      <section className={styles.SideNavBar}>
        <Sidebar />
        <header>
          <button>Home</button>
          <button>Library</button>
          <button>Requests</button>
          <button>Profile</button>
        </header>
      </section>
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

