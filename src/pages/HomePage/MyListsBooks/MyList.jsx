import React from 'react';
import PropTypes from 'prop-types';

import ListBooks from 'components/ListBooks';

const MyList = ({ name, books, updateBook }) => {
  if (name.length > 0) {
    const listBooks = books.length > 0
      ? <ListBooks books={books} updateBook={updateBook} />
      : <p>Nenhum livro na lista</p>;

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

MyList.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default MyList;
