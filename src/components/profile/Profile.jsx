import React from 'react';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';
import { ProfileHook } from '../../hooks/ProfileHook';
import styles from './Profile.css';

export default function Profile() {
  const { loading, userBooks } = ProfileHook();

  const booksToTrade = userBooks.filter(book => book.isTradeable === true);
  const wishListBooks = userBooks.filter(book => book.isWatched === true)

  return (
    <div>
      <header>
        <Link to="/">Home</Link >
        <Link to="/library">Library</Link >
        <Link to="/dashboard">Dashboard</Link >
        <Link to="/about">About</Link >
      </header>

      <ProfileForm />
      <button>Request a Book</button>

      <section>
        <div>Trade</div>
        <ul>
          {booksToTrade.map(book => (
            <li key={book.id}>
              <img src={book.image} alt={book.title} />
            </li>
          ))}
        </ul>
        <div>Wish List</div>
        <ul>
          {wishListBooks.map(book => (
            <li key={book.id}>
              <img src={book.image} alt={book.title} />
            </li>
          ))}
        </ul>
        <div>Feed</div>
      </section>
    </div >
  )
}
