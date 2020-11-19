import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import styles from './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header id={styles.Header}>
      <img id={styles.logo} src={logo} />
      <Sidebar />
    </header>
  );
}
