import React from 'react';
import PropTypes from 'prop-types';

import ImageBookDefault from 'images/book.jpg';

const BookImage = ({ thumbnail }) => {
  let image = ImageBookDefault;
  if (thumbnail !== '') {
    image = thumbnail;
  }

  const style = {
    width: 128,
    height: 193,
    backgroundImage: `url("${image}")`,
  };

  return (
    <div className="book-cover" style={style} />
  );
};

BookImage.defaultProps = {
  thumbnail: '',
};

BookImage.propTypes = {
  /** URL to image thumbnail. */
  thumbnail: PropTypes.string,
};

export default BookImage;
