import React from 'react';
import PropTypes from 'prop-types';

import MyListsBooks from './MyListsBooks';
import OpenSearch from './OpenSearch';

const HomePage = props => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>

    <MyListsBooks {...props} />

    <OpenSearch />
  </div>
);

HomePage.propTypes = {
  myBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default HomePage;
