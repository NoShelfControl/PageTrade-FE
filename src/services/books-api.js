const URL = process.env.BACKEND_URL;

/* eslint-disable max-len */
export const getBooks = search => {
  return fetch(`https://books.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.GOOGLE_API_KEY}`)
    .then(res => res.json())
    .then(json => json.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.author,
      image: book.volumeInfo.imageLinks.thumbnail,
    })));
};

export const postUserBook = (book) => {
  return fetch (`${URL}/api/v1/books`, {
    method: 'POST',
    body: JSON.stringify({ 
      title: book.title,
      author: book.author,
      google_id: book.google_id,
      image: book.image,
      is_tradeable: book.is_tradeable
    }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json());
};

export const getUserBooks = () => {
  return fetch(`${URL}/api/v1/books/`)
    .then(res => res.json())
    .then(json => json.books.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      google_id: book.google_id,
      owner_id: book.owner_id,
      image: book.image,
      is_tradeable: book.is_tradeable
    })))
    .then(res => console.log(res));
};
