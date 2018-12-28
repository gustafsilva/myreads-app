import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ListAnimated from 'components/animations/ListAnimated';
import Book from 'components/Book';

class ListBooks extends PureComponent {
  state = {
    open: false,
  }

  componentDidMount() {
    this.setState({ open: true });
  }

  updateBookShelf = (bookID, newShelf) => {
    const { books, updateBook } = this.props;
    const book = books.filter(currentBook => currentBook.id === bookID);

    if (book.length > 0) {
      updateBook(book[0], newShelf);
    }
  }

  render() {
    const { books } = this.props;
    const { open } = this.state;

    const listBook = books.map((book) => {
      const thumbnail = book.imageLinks !== undefined
        ? book.imageLinks.smallThumbnail
        : '';

      return (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          authors={book.authors}
          thumbnail={thumbnail}
          shelf={book.shelf}
          updateBook={this.updateBookShelf}
        />
      );
    });

    const showList = open && listBook.length > 0;
    return (
      <ListAnimated className="books-grid" pose={showList ? 'open' : 'closed'}>
        {listBook}
      </ListAnimated>
    );
  }
}

const IMAGE_LINK_SHAPE = {
  smallThumbnail: PropTypes.string,
};

const BOOK_SHAPE = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageLinks: PropTypes.shape(IMAGE_LINK_SHAPE),
  authors: PropTypes.arrayOf(PropTypes.string),
};

ListBooks.propTypes = {
  /** List of books to be rendered. */
  books: PropTypes.arrayOf(BOOK_SHAPE).isRequired,
  /** Function responsible for updating book shelf. */
  updateBook: PropTypes.func.isRequired,
};

export default ListBooks;
