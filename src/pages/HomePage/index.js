import React from 'react';
import PropTypes from 'prop-types';

import OpenSearch from 'components/OpenSearch';
import Bookshelf from 'components/Bookshelf';

const HomePage = ({ myBooks, updateBook }) => {
  const currentlyReadingBooks = myBooks.filter(book => book.shelf === 'currentlyReading');
  const wantToReadBooks = myBooks.filter(book => book.shelf === 'wantToRead');
  const readBooks = myBooks.filter(book => book.shelf === 'read');

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <Bookshelf name="Currently Reading" books={currentlyReadingBooks} updateBook={updateBook} />

      <Bookshelf name="Want to Read Books" books={wantToReadBooks} updateBook={updateBook} />

      <Bookshelf name="Read" books={readBooks} updateBook={updateBook} />

      <OpenSearch />
    </div>
  );
};

HomePage.propTypes = {
  myBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default HomePage;
