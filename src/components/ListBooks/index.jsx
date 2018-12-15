import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const ListBooks = ({ books, updateBook }) => {
  const listBook = books.map(book => (
    <Book key={book.id} data={book} updateBook={updateBook} />
  ));

  return (
    <ol className="books-grid">
      {listBook}
    </ol>
  );
};

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default ListBooks;
