import React from 'react';
import PropTypes from 'prop-types';

const BookImage = ({ imageLinks }) => {
  const { smallThumbnail, thumbnail } = imageLinks;

  let image = '';
  if (smallThumbnail !== '') {
    image = smallThumbnail;
  } else if (thumbnail !== '') {
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

const IMAGE_LINK_SHAPE = {
  smallThumbnail: PropTypes.string,
  thumbnail: PropTypes.string,
};

BookImage.propTypes = {
  imageLinks: PropTypes.shape(IMAGE_LINK_SHAPE),
};

BookImage.defaultProps = {
  imageLinks: { smallThumbnail: '', thumbnail: '' },
};

export default BookImage;
