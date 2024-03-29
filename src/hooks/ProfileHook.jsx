import { useState, useEffect } from 'react';
import {
  getSingleUserBooks,
  getUserBooks,
  getUserActions,
  getGlobalActions,
  getAllBooks,
} from '../services/books-api';

export const ProfileHook = (id) => {
  const [loading, setLoading] = useState(true);
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    getUserBooks(id)
      .then((books) => setUserBooks(books))
      .finally(() => setLoading(false));
  }, []);

  return { loading, userBooks };
};

export const useSingleUserBooks = () => {
  const [loading, setLoading] = useState(true);
  const [singleUserBooks, setSingleUserBooks] = useState([]);

  useEffect(() => {
    getSingleUserBooks()
      .then((books) => setSingleUserBooks(books))
      .finally(() => setLoading(false));
  }, []);

  return { loading, singleUserBooks };
};

export const useAllBooks = () => {
  const [loading, setLoading] = useState(true);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then((books) => setAllBooks(books))
      .finally(() => setLoading(false));
  }, []);

  return { loading, allBooks };
};

export const useUserActions = (id) => {
  const [loadingActions, setLoadingActions] = useState(true);
  const [actions, setActions] = useState([]);

  useEffect(() => {
    getUserActions(id)
      .then((userActions) => setActions(userActions))
      .then(() => setLoadingActions(false));
  }, []);

  return { loadingActions, actions };
};

export const useGlobalActions = () => {
  const [loadingActions, setLoadingActions] = useState(true);
  const [globalActions, setGlobalActions] = useState([]);

  useEffect(() => {
    getGlobalActions()
      .then((userActions) => setGlobalActions(userActions))
      .then(() => setLoadingActions(false));
  }, []);

  return { loadingActions, globalActions };
};
