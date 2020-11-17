import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import { getUserBooks } from '../../services/books-api';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getUserBooks()
      .then(books => setBooks(books));
  }, []);

  const booksElements = books.map(book => (
    <ul key={books.id}>
      {book.isTradeable === true ?
        <li>
          <img src={book.image} alt={book.title} />
        </li>
        : null
      }
    </ul>
  ));

  return (
    <div className={styles.Home} id="outer-container">
      <section className={styles.SideNavBar} id={styles.PageWrap}>
        <header>
          <Link to="/">Home</Link >
          <Link to="/library">Library</Link >
          <Link to="/dashboard">Dashboard</Link >
          <Link to="/about">About</Link >
        </header>

        <main className={styles.Main}>

          <section className={styles.BookSection}>
            <div>Trade {booksElements}</div>
            <div>Wish List</div>
          </section>
          <div>Feed</div>
        </main>
      </section>
    </div>
  );
}

