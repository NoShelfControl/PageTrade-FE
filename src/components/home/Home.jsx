/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { getSingleUserBooks } from '../../services/books-api';
import styles from './Home.css';
import Sidebar from '../sidebar/Sidebar';
import { useGlobalActions } from '../../hooks/ProfileHook';
import { homeFeedSorter } from '../../utils/feed-sorter';
import Loading from '../loading/Loading';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Home() {
  const [books, setSingleBooks] = useState([]);
  const { loadingActions, globalActions } = useGlobalActions();
  const sortedActions = homeFeedSorter(globalActions);

  useEffect(() => {
    getSingleUserBooks()
      .then(books => setSingleBooks(books));
  }, []);

  if(loadingActions) return <Loading />;

  const booksElements = books.map((book, idx) => (
    <ul key={idx}>
      {book.isTradeable === true ?
        <li key={idx}>
          <img key={idx} src={book.image} alt={book.title} />
        </li>
        : null
      }
    </ul>
  ));

  const watchListElements = books.map((book, idx) => (
    <ul key={idx}>
      {book.isWatched === true ?
        <li key={idx}>
          <img key={idx} src={book.image} alt={book.title} />
        </li>
        : null
      }
    </ul>
  ));

  return (
    <div className={styles.Home}>
      <Header />
      <Sidebar />
      <main>
        <section className={styles.BookSection}>
          <div>Trade {booksElements}</div>
          <div>Wish List {watchListElements}</div>
        </section>
        <div className={styles.feed}>Feed
          <ul>
            {sortedActions.map((action, idx) => {
              return <li key={idx}>{action}</li>;
            })}
          </ul></div>

      </main>
      <Footer />
    </div>
  );
}
