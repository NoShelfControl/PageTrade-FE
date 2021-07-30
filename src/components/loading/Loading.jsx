import React from 'react';
import styles from './Loading.module.css';

const Loading = () => (
  <img
    className={styles.Loading}
    src="https://media1.giphy.com/media/mF5eigrMBLWzN7PXpT/giphy.gif"
    alt="Loading spinner"
  />
);

export default Loading;
