import React from 'react';
import PropTypes from 'prop-types';

import SearchBooksBar from './SearchBooksBar';
import ListBooks from '../ListBooks';

const SearchPage = (props) => {
  const {
    query,
    books,
    updateBook,
    updateQuery,
  } = props;

  return (
    <div className="search-books">
      <SearchBooksBar query={query} updateQuery={updateQuery} />
      <div className="search-books-results">
        <ListBooks books={books} updateBook={updateBook} />
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
};

export default SearchPage;
