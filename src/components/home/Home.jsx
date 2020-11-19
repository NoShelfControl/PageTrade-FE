/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSingleUserBooks } from '../../services/books-api';
import styles from './Home.css';
import logo from '../../assets/logo.png';
import { useCurrentUser } from '../../context/AuthContext';
import Sidebar from '../sidebar/Sidebar';
// import Sidebar from '../sidebar/Sidebar';

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
        {/* <Link to="/" className={styles.Link}>Home</Link >
        <Link to="/library/" className={styles.Link}>Library</Link >
        <Link to={`/profile/${user.id}`} className={styles.Link}>Profile</Link > */}
      </header>
      <Sidebar />
      <main>
        <section className={styles.BookSection}>
          <div>Trade {booksElements}</div>
          <div>Wish List {watchListElements}</div>
        </section>
        <div className={styles.feed}>Feed</div>
      </main>
      <footer>
        <Link to="/about" className={styles.Link}>about</Link >
        <Link to="/careers" className={styles.Link}>careers</Link >
        <Link to="/terms" className={styles.Link}>terms of service</Link >
      </footer>
    </div>
  );
}
