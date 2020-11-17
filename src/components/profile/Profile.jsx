import React from 'react';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';
import styles from './Profile.css';

export default function Profile() {
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
        <div>Wish List</div>
        <div>Feed</div>
      </section>
    </div >
  )
}
