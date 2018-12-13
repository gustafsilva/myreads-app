import React from 'react';
import PropTypes from 'prop-types';

const BookImage = (props) => {
  const { imageLinks } = props;
  const { smallThumbnail } = imageLinks;

  const style = {
    width: 128,
    height: 193,
    backgroundImage: `url("${smallThumbnail}")`,
  };

  return (
    <div className="book-cover" style={style} />
  );
};

BookImage.propTypes = {
  imageLinks: PropTypes.shape({ smallThumbnail: PropTypes.string }).isRequired,
};

export default BookImage;
