import React, { useState, useEffect } from 'react';
import styles from './Home.css';
import Sidebar from '../sidebar/Sidebar';
import { getUserBooks } from '../../services/books-api';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getUserBooks()
      .then(books => setBooks(books))
      .then(books => console.log(books))
  }, []);

  const booksElements = books.map(book => (
    <ul>
      <li key={books.id}>
        <img src={book.image} alt={book.title} />
        <p>{book.isTradeable}</p>
      </li>
    </ul>
  ))

  // if (books.isTradeable === true) {
  //   return books
  // }

  return (
    <div className={styles.Home} id="outer-container">
      <section className={styles.SideNavBar} id={styles.PageWrap}>
        {/* <Sidebar pageWrapId={'PageWrap'} outerContainerId={'outer-container'} /> */}
        <header>
          <button>Home</button>
          <button>Library</button>
          <button>Requests</button>
          <button>Profile</button>
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
  )
}

