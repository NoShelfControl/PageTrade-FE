import { del, get, post, put } from './request';

/* eslint-disable max-len */
export const getBooks = search => {
  return fetch(`https://books.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.GOOGLE_API_KEY}`)
    .then(res => res.json())
    .then(json => json.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No Author',
      image: book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '',
      isTradeable: false,
      isWatched: false
    })));
};

export const postUserBook = (book) => {
  return post('/api/v1/books', {
    title: book.title,
    author: book.author,
    googleId: book.id,
    image: book.image,
    isTradeable: book.isTradeable,
    isWatched: book.isWatched
  });
};

export const getUserBooks = (id) => {
  return get(`/api/v1/books/user/${id}`)
    .then(books => books.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      googleId: book.googleId,
      image: book.image,
      isTradeable: book.isTradeable,
      isWatched: book.isWatched,
      ownerId: book.ownerId
    })));
};

export const getAllBooks = () => {
  return get('/api/v1/books/')
    .then(books => books.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      googleId: book.googleId,
      image: book.image,
      isTradeable: book.isTradeable,
      isWatched: book.isWatched,
      ownerId: book.ownerId
    })));
};

export const getSingleUserBooks = () => {
  return get('/api/v1/books/user/')
    .then(books => books.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      googleId: book.googleId,
      image: book.image,
      isTradeable: book.isTradeable,
      isWatched: book.isWatched,
      ownerId: book.ownerId
    })));
};


export const updateTradeable = (book, ownerId) => {
  return put(`/api/v1/books/user/${ownerId}`, book);
};

export const deleteBook = (id) => {
  return del(`/api/v1/books/user/${id}`);

};

export const postAction = (action) => {
  return post('/api/v1/feed', {
    ...action
  });
};

export const getUserActions = (id) => {
  return get(`/api/v1/feed/${id}`)
    .then(books => books.map(book => ({
      id: book.id,
      actionType: book.actionType,
      book: book.book
    })));
};

export const getGlobalActions = () => {
  return get('/api/v1/feed/')
    .then(actions => actions.map(action => ({
      id: action.id,
      userId: action.userId,
      actionType: action.actionType,
      book: action.book
    })));
};


