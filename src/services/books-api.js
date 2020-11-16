import { get, post } from './request';

/* eslint-disable max-len */
export const getBooks = search => {
  return fetch(`https://books.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.GOOGLE_API_KEY}`)
    .then(res => res.json())
    .then(json => json.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      image: book.volumeInfo.imageLinks.thumbnail,
      isTradeable: false
    })));
};

export const postUserBook = (book) => {
  return post('/api/v1/books', { 
    title: book.title,
    author: book.author,
    googleId: book.id,
    image: book.image,
    isTradeable: book.isTradeable
  });
};

export const getUserBooks = () => {
  return get('/api/v1/books')
    .then(books => books.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      googleId: book.googleId,
      image: book.image,
      isTradeable: book.isTradeable
    })));
};
