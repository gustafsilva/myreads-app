import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ListAnimated from 'components/animations/ListAnimated';
import Book from './Book';

class ListBooks extends PureComponent {
  state = {
    open: false,
  }

  componentDidMount() {
    this.setState({ open: true });
  }

  render() {
    const { books, updateBook } = this.props;
    const { open } = this.state;

    const listBook = books.map(book => (
      <Book key={book.id} data={book} updateBook={updateBook} />
    ));

    const showList = open && listBook.length > 0;
    return (
      <ListAnimated className="books-grid" pose={showList ? 'open' : 'closed'}>
        {listBook}
      </ListAnimated>
    );
  }
}

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default ListBooks;
