import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from './Sidebar.css';

export default function Sidebar() {
  return (
    <Menu>
      <a href="/" className={styles.NavItem}>
        Home
      </a>
      <a href="/library" className={styles.NavItem}>
        Library
      </a>
      <a href="/profile" className={styles.NavItem}>
        Profile
      </a>
      <a href="/requests" className={styles.NavItem}>
        Requests
      </a>
      <a href="/about" className={styles.NavItem}>
        About
      </a>
    </Menu>
  );
};
