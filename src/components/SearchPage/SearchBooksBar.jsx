import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBooksBar = ({ query, updateQuery }) => (
  <div className="search-books-bar">
    <Link to="/" className="close-search">Close</Link>
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={event => updateQuery(event.target.value)}
      />
    </div>
  </div>
);

SearchBooksBar.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
};

export default SearchBooksBar;
