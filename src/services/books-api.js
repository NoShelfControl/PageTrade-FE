import { del, get, post, put } from './request';

/* eslint-disable max-len */
export const getBooks = search => {
  return fetch(`https://books.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.GOOGLE_API_KEY}`)
    .then(res => res.json())
    .then(json => json.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No Author',
      image: book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : 'No Image',
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
      isTradeable: book.isTradeable,
      ownerId: book.ownerId
    })));
};

export const updateTradeable = (book) => {
  return put('/api/v1/books', book)
    .then(res => console.log(res));
};

export const deleteBook = (id) => {
  return del(`/api/v1/books/${id}`)
    .then(res => console.log(res));
};
