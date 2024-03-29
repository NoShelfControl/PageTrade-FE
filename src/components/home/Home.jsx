/* eslint-disable max-len */

import React from 'react';
import styles from './Home.css';
import Sidebar from '../sidebar/Sidebar';
import { useAllBooks, useGlobalActions } from '../../hooks/ProfileHook';
import { homeFeedSorter } from '../../utils/feed-sorter';
import Loading from '../loading/Loading';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { booksSorter } from '../../utils/book-sorter';
import { Link } from 'react-router-dom';

export default function Home() {
  const { loadingActions, globalActions } = useGlobalActions();
  const { loading, allBooks } = useAllBooks();
  const sortedActions = homeFeedSorter(globalActions);
  const books = booksSorter(allBooks);

  if(loadingActions || loading) return <Loading />;

  const booksElements = books[0].map((book, idx) => (
    <ul key={idx}>
      {book.isTradeable === true ? (
        <Link to={`/profile/${book.ownerId}`} key={idx}>
          <li key={idx}>
            <img key={idx} src={book.image} alt={book.title} />
          </li>
        </Link>
      ) : null}
    </ul>
  ));

  const watchListElements = books[1].map((book, idx) => (
    <ul key={idx}>
      {book.isWatched === true ? (
        <li key={idx}>
          <Link to={`/profile/${book.ownerId}`} key={idx}>
            <img key={idx} src={book.image} alt={book.title} />
          </Link>
        </li>
      ) : null}
    </ul>
  ));

  return (
    <div className={styles.Home}>
      <Header />
      {console.log(sortedActions)}
      <Sidebar />
      <main>
        <section className={styles.BookSection}>
          <div>
            <h2>RECENTLY ADDED FOR TRADE</h2>
            <section className={styles.booksElements}>{booksElements}</section>
          </div>
          <div>
            <h2>RECENTLY ADDED TO WATCH LISTS</h2>
            <section className={styles.booksElements}>
              {watchListElements}
            </section>
          </div>
        </section>
        <div className={styles.feed}>
          Feed
          <ul>
            {sortedActions.map((action, idx) => {
              return <li key={idx}>{action}</li>;
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
