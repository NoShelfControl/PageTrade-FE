/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { getSingleUserBooks } from '../../services/books-api';
import styles from './Home.css';
import { useCurrentUser } from '../../context/AuthContext';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Header from '../header/Header';

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
      <Header />
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
