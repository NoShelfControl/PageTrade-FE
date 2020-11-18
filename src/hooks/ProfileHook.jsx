import React, { useState, useEffect } from 'react';
import { getUserBooks } from '../services/books-api';

export const ProfileHook = () => {
  const [loading, setLoading] = useState(true);
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    getUserBooks()
      .then(books => setUserBooks(books))
      .finally(() => setLoading(false));
  }, []);

  return { loading, userBooks };
};
