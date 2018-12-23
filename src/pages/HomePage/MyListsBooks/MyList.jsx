import React from 'react';
import PropTypes from 'prop-types';

import ListBooks from '../../../components/ListBooks';

const MyList = ({ name, books, updateBook }) => (
  name.length > 0 && (
    <div className="bookshelf-books">
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <ListBooks books={books} updateBook={updateBook} />
      </div>
    </div>
  )
);

MyList.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default MyList;
