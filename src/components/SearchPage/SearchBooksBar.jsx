import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBooksBar extends Component {
  render() {
    const { query, updateQuery } = this.props;
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            id="searchBooksBar"
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={event => updateQuery(event.target.value)}
            ref={(input) => { this.searchInput = input; }}
          />
        </div>
        <button
          className="clear-search"
          onClick={() => {
            updateQuery('');
            this.searchInput.focus();
          }}
          type="submit"
        >
          Clear
        </button>
      </div>
    );
  }
}

SearchBooksBar.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
};

export default SearchBooksBar;
