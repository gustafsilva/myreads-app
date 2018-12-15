import React from 'react';
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

export default BookAuthors;
