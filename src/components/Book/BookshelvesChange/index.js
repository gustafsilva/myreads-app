import React from 'react';
import PropTypes from 'prop-types';

const BookshelvesChange = ({ update, currentShelf }) => {
  const listShelfs = ['currentlyReading', 'wantToRead', 'read', 'none'];

  let shelf = currentShelf;
  if (listShelfs.indexOf(currentShelf) === -1) {
    shelf = 'none';
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={event => update(event.target.value)} value={shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookshelvesChange.defaultProps = {
  currentShelf: 'none',
};

BookshelvesChange.propTypes = {
  /** Function responsible for updating book shelf. */
  update: PropTypes.func.isRequired,
  /** ID of the current shelf. */
  currentShelf: PropTypes.string,
};

export default BookshelvesChange;
