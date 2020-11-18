import React, { useEffect, useState } from 'react';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';
import { ProfileHook } from '../../hooks/ProfileHook';
import styles from './Profile.css';
import { useCurrentUser } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';


export default function Profile() {
  const { userId } = useParams();  
  const { loading, userBooks } = ProfileHook(userId);

  const booksToTrade = userBooks.filter(book => book.isTradeable === true);
  const wishListBooks = userBooks.filter(book => book.isWatched === true);

  const user = useCurrentUser();

  if(loading) return <h1>Loading...</h1>;

  return (
    <div>
      <header>
        <Link to="/">Home</Link >
        <Link to="/library">Library</Link >
        <Link to="/dashboard">Dashboard</Link >
        <Link to="/about">About</Link >
      </header>
      { user.id === userId ?
        <ProfileForm />
        : null
      }
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
  );
}
