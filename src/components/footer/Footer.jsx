import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';

export default function Footer() {
  return (
    <footer>
      <Link to="/about" className={styles.Link}>about</Link >
      <Link to="/careers"className={styles.Link}>careers</Link >
      <Link to="/terms" className={styles.Link}>terms of service</Link >
    </footer>
  );
}
