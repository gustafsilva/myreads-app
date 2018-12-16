import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = ({ update, currentShelf }) => (
  <div className="book-shelf-changer">
    <select onChange={event => update(event.target.value)} value={currentShelf}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
);

BookShelfChanger.propTypes = {
  update: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired,
};

export default BookShelfChanger;
