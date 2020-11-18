import React, { useState, useEffect } from 'react';
import { getSingleUserBooks, getUserBooks } from '../services/books-api';

export const ProfileHook = (id) => {
  const [loading, setLoading] = useState(true);
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    getUserBooks(id)
      .then(books => setUserBooks(books))
      .finally(() => setLoading(false));
  }, []);

  return { loading, userBooks };
};

export const useSingleUserBooks = () => {
  const [loading, setLoading] = useState(true);
  const [singleUserBooks, setSingleUserBooks] = useState([]);

  useEffect(() => {
    getSingleUserBooks()
      .then(books => setSingleUserBooks(books))
      .finally(() => setLoading(false));
  }, []);

  return { loading, singleUserBooks };
};
