import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const ListBooks = (props) => {
  const { books, updateBook } = props;

  const listBook = books.map(book => (
    <Book key={book.id} data={book} updateBook={updateBook} />
  ));

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {listBook}
      </ol>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default ListBooks;
