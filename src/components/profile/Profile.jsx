import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { ProfileHook, useUserActions } from '../../hooks/ProfileHook';
import styles from './Profile.module.css';
import ReactModal from 'react-modal';
import { useCurrentUser } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import { feedSorter } from '../../utils/feed-sorter';
import Loading from '../loading/Loading';

export default function Profile() {
  const [modalStatus, setModalStatus] = useState(false);
  const user = useCurrentUser();
  const { userId } = useParams();
  const { loading, userBooks } = ProfileHook(userId);
  const { loadingActions, actions } = useUserActions(userId);
  const sortedActions = feedSorter(userId, actions);

  const booksToTrade = userBooks.filter((book) => book.isTradeable === true);
  const wishListBooks = userBooks.filter((book) => book.isWatched === true);
  const collection = userBooks.filter(
    (book) => book.isTradeable === false && book.isWatched === false
  );

  if(loading) return <Loading />;
  if(loadingActions) return <Loading />;
  if(!user) return <Loading />;

  return (
    <section>
      <Header />
      <main>
        <section id={styles.Profile}>
          <section id={styles.editProfile}>
            {user.id === userId ? (
              <div id={styles.thiscontainer}>
                <ReactModal
                  className={styles.modal}
                  isOpen={modalStatus}
                  contentLabel="SearchBox"
                  ariaHideApp={false}
                >
                  <div className={styles.form}>
                    <ProfileForm user={user} />
                    <button
                      className={styles.closeButton}
                      onClick={() => setModalStatus(false)}
                    >
                    X
                    </button>
                  </div>
                </ReactModal>
                <button
                  className={styles.editButton}
                  onClick={() => setModalStatus(true)}
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <a className={styles.mailButton} href={`mailto:${user.email}`}>
                Request a Book
              </a>
            )}
            <div className={styles.sectionHeader}>Collection</div>
            <div className={styles.bookDiv}>
              <ul className={styles.bookLists}>
                {collection.map((book) => (
                  <li key={book.id}>
                    <img src={book.image} alt={book.title} />
                    <p>{book.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.sectionHeader}>Trade</div>
            <div className={styles.bookDiv}>
              <ul className={styles.bookLists}>
                {booksToTrade.map((book) => (
                  <li key={book.id}>
                    <img src={book.image} alt={book.title} />
                    <p>{book.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.sectionHeader}>Wish List</div>
            <div className={styles.bookDiv}>
              <ul className={styles.bookLists}>
                {wishListBooks.map((book) => (
                  <li key={book.id}>
                    <img src={book.image} alt={book.title} />
                    <p>{book.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div></div>
          <section id={styles.container2}>
            <h1>{user.userName ? user.userName : `User ${userId}`}</h1>
            <div className={styles.bio}>
              <div className={styles.sectionHeader}>Bio</div>
              <div className={styles.bioText}>
                <p>{user.bio}</p>
              </div>
            </div>
            <div className={styles.feedSection}>
              <div className={styles.sectionHeader}>Feed</div>
              <ul className={styles.feed}>
                {sortedActions.map((action, idx) => {
                  return <li key={idx}>{action}</li>;
                })}
              </ul>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </section>
  );
}
