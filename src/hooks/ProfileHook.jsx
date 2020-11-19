import React, { useState, useEffect } from 'react';
import { getSingleUserBooks, 
  getUserBooks, 
  getUserActions } 
  from '../services/books-api';

<<<<<<< HEAD
=======

>>>>>>> df1597e7dd7a63a20161b1924024b16412acec17
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

<<<<<<< HEAD
=======

>>>>>>> df1597e7dd7a63a20161b1924024b16412acec17
  return { loading, singleUserBooks };
};

export const useUserActions = (id) => {
  const [loadingActions, setLoadingActions] = useState(true);
  const [actions, setActions] = useState([]);

  useEffect(() => {
    getUserActions(id)
      .then(userActions => setActions(userActions))
      .then(() => setLoadingActions(false));
  }, []);

  return { loadingActions, actions };
};
