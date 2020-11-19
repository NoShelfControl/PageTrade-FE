import React from 'react';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';
import { ProfileHook, useUserActions } from '../../hooks/ProfileHook';
import styles from './Profile.css';
import { useCurrentUser } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import { feedSorter } from '../../utils/feed-sorter';


export default function Profile() {

  const user = useCurrentUser();
  const { userId } = useParams(); 
  const { loading, userBooks } = ProfileHook(userId);
  const { loadingActions, actions } = useUserActions(userId);
  const sortedActions = feedSorter(userId, actions);



  const booksToTrade = userBooks.filter(book => book.isTradeable === true);
  const wishListBooks = userBooks.filter(book => book.isWatched === true);
  const collection = userBooks.filter(book => 
    book.isTradeable === false 
    && book.isWatched === false);




  if(loading) return <h1>Loading...</h1>;
  if(loadingActions) return <h1>Loading...</h1>;
  if(!user) return <h1>Loading...</h1>;

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
        <div>Collection</div>
        <ul>
          {collection.map(book => (
            <li key={book.id}>
              <img src={book.image} alt={book.title} />
            </li>
          ))}
        </ul>
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
        <ul>
          { sortedActions.map((action, idx) => {
            return <li key={idx}>{action}</li>;
          })}
        </ul>
      </section>
    </div >
  );
}
