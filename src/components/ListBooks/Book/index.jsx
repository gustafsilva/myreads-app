import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemAnimated from 'components/animations/ItemAnimated';
import BookImage from './BookImage';
import BookShelfChanger from './BookShelfChanger';
import BookAuthors from './BookAuthors';


class Book extends Component {
  update = (newShelf) => {
    const { data, updateBook } = this.props;

    updateBook(data, newShelf);
  }

  render() {
    const { data } = this.props;
    const { title } = data;

    return (title.length > 0 && (
      <ItemAnimated>
        <div className="book">
          <div className="book-top">
            <BookImage imageLinks={data.imageLinks} />
            <BookShelfChanger update={this.update} currentShelf={data.shelf} />
          </div>
          <div className="book-title">{title}</div>
          <BookAuthors authors={data.authors} />
        </div>
      </ItemAnimated>
    ));
  }
}

const IMAGE_LINK_SHAPE = {
  smallThumbnail: PropTypes.string,
  thumbnail: PropTypes.string,
};

const DATA_SHAPE = {
  title: PropTypes.string.isRequired,
  imageLinks: PropTypes.shape(IMAGE_LINK_SHAPE),
  authors: PropTypes.arrayOf(PropTypes.string),
};

Book.propTypes = {
  data: PropTypes.shape(DATA_SHAPE).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default Book;
