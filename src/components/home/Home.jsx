/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { getSingleUserBooks } from '../../services/books-api';
import styles from './Home.css';
import logo from '../../assets/logo.png';
import { useCurrentUser } from '../../context/AuthContext';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

export default function Home() {
  const [books, setSingleBooks] = useState([]);

  useEffect(() => {
    getSingleUserBooks()
      .then(books => setSingleBooks(books));
  }, []);

  const booksElements = books.map(book => (
    <ul key={books.id}>
      {book.isTradeable === true ?
        <li key={book.id}>
          <img key={book.id} src={book.image} alt={book.title} />
        </li>
        : null
      }
    </ul>
  ));

  const watchListElements = books.map(book => (
    <ul key={books.id}>
      {book.isWatched === true ?
        <li key={book.id}>
          <img key={book.id} src={book.image} alt={book.title} />
        </li>
        : null
      }
    </ul>
  ));

  const user = useCurrentUser();

  return (
    <div className={styles.Home}>
      <header>
        <img id={styles.logo} src={logo} />
      </header>
      <Sidebar />
      <main>
        <section className={styles.BookSection}>
          <div>Trade {booksElements}</div>
          <div>Wish List {watchListElements}</div>
        </section>
        <div className={styles.feed}>Feed</div>
      </main>
      <Footer />
    </div>
  );
}
