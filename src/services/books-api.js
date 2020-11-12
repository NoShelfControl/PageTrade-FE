/* eslint-disable max-len */
export const getBooks = search => {
  return fetch(`https://books.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA-ysT6z6blrqRZfWWjBhsHj8iqrarqsqA`)
    .then(res => res.json())
    .then(json => json.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.author,
      image: book.volumeInfo.imageLinks.thumbnail,
    })));
};
