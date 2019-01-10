import React from 'react';
import PropTypes from 'prop-types';
import { toProperList } from '@cahil/utils';

const BookAuthors = ({ authors }) => {
  const authorsProperList = toProperList(authors);

  return authors.length > 0 && (
    <div className="book-authors">{authorsProperList}</div>
  );
};

BookAuthors.defaultProps = {
  authors: [],
};

BookAuthors.propTypes = {
  /** List of authors to be rendered. */
  authors: PropTypes.arrayOf(PropTypes.string),
};

export default BookAuthors;
