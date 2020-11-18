import React from 'react';
import { bool } from 'prop-types';
import styles from './Menu.css';

const Menu = () => {
  return (
    <>
      <span open={open => open ? 'translateX(0)' : 'translateX(-100%)'}>
        < a href="/">
          Home
      </a>
        <a href="/library">
          Library
      </a>
        <a href="/profile">
          Profile
      </a>
        <a href="/requests">
          Requests
      </a>
        <a href="/about">
          About
      </a>
      </span>
    </>
  );
};

export default Menu;
