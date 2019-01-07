import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ItemAnimated from 'components/animations/ItemAnimated';
import BookImage from './BookImage';
import BookAuthors from './BookAuthors';
import BookshelvesChange from './BookshelvesChange';


class Book extends PureComponent {
  /** Atualiza a prateleira do livro. */
  update = (newShelf) => {
    const {
      id,
      updateBook,
    } = this.props;

    // Utilizando o método passado nas props, atualiza a prateleira do livro.
    updateBook(id, newShelf);
  }

  render() {
    const {
      title,
      thumbnail,
      shelf,
      authors,
    } = this.props;

    return (title.length > 0 && (
      <ItemAnimated>
        <div className="book">
          <div className="book-top">
            <BookImage thumbnail={thumbnail} />
            <BookshelvesChange update={this.update} currentShelf={shelf} />
          </div>
          <div className="book-title">{title}</div>
          <BookAuthors authors={authors} />
        </div>
      </ItemAnimated>
    ));
  }
}


Book.defaultProps = {
  thumbnail: '',
  authors: [],
  shelf: 'none',
};

Book.propTypes = {
  /** Unique ID of the book. */
  id: PropTypes.string.isRequired,
  /** Book title. */
  title: PropTypes.string.isRequired,
  /** URL to image thumbnail. */
  thumbnail: PropTypes.string,
  /** List of authors of the book */
  authors: PropTypes.arrayOf(PropTypes.string),
  /** Current book shelf. */
  shelf: PropTypes.string,
  /** Function responsible for updating book shelf. */
  updateBook: PropTypes.func.isRequired,
};

export default Book;
