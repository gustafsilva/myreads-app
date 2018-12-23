import React from 'react';
import PropTypes from 'prop-types';

import MyList from './MyList';

const MyListsBooks = ({ myBooks, updateBook }) => {
  const currentlyReadingBooks = myBooks.filter(book => book.shelf === 'currentlyReading');
  const wantToReadBooks = myBooks.filter(book => book.shelf === 'wantToRead');
  const readBooks = myBooks.filter(book => book.shelf === 'read');

  return (
    <div className="list-books-content">
      <div>
        <MyList name="Currently Reading" books={currentlyReadingBooks} updateBook={updateBook} />

        <MyList name="Want to Read Books" books={wantToReadBooks} updateBook={updateBook} />

        <MyList name="Read" books={readBooks} updateBook={updateBook} />
      </div>
    </div>
  );
};

MyListsBooks.propTypes = {
  myBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default MyListsBooks;
