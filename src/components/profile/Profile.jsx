import React from 'react';

export default function Profile() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link >
        <Link to="/library">Library</Link >
        <Link to="/dashboard">Profile</Link >
        <Link to="/about">About</Link >
      </header>

      <main className={styles.Main}>
        <div></div>
        <div></div>
        <div></div>
      </main>
    </div>
  )
}
