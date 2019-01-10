import React from 'react';
import PropTypes from 'prop-types';

import ListBooks from 'components/ListBooks';

const Bookshelf = ({ name, books, updateBook }) => {
  if (name.length > 0) {
    const listBooks = books.length > 0
      ? <ListBooks books={books} updateBook={updateBook} />
      : <p>No book in the list.</p>;

    return (
      <div className="bookshelf-books">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          {listBooks}
        </div>
      </div>
    );
  }

  return false;
};

const IMAGE_LINK_SHAPE = {
  smallThumbnail: PropTypes.string,
};

const BOOK_SHAPE = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageLinks: PropTypes.shape(IMAGE_LINK_SHAPE),
  authors: PropTypes.arrayOf(PropTypes.string),
});

Bookshelf.propTypes = {
  /** Shelf name. */
  name: PropTypes.string.isRequired,
  /** Current shelf books. */
  books: PropTypes.arrayOf(BOOK_SHAPE).isRequired,
  /** Function responsib'le for updating book shelf. */
  updateBook: PropTypes.func.isRequired,
};

export default Bookshelf;
