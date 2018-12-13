import React from 'react';
import PropTypes from 'prop-types';
import { toProperList } from '@cahil/utils';

const BookAuthors = (props) => {
  const { authors } = props;
  const authorsProperList = toProperList(authors);

  return (
    <div className="book-authors">{authorsProperList}</div>
  );
};

BookAuthors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookAuthors;
