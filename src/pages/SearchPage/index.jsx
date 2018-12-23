import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from '../../api/BooksAPI';
import * as BooksAPIUtils from '../../utils/BooksAPIUtils';
import SearchBooksBar from './SearchBooksBar';
import ListBooks from '../../components/ListBooks';
import Loading from '../../components/Loading';

class SearchPage extends Component {
  state = {
    query: '',
    books: [],
    loading: false,
  }

  updateQuery = (newQuery) => {
    this.setState({
      query: newQuery,
      loading: true,
    });

    if (newQuery !== '') {
      BooksAPI.search(newQuery).then((response) => {
        const { query } = this.state;
        const { myBooks } = this.props;

        if (query === newQuery) {
          const { error } = response;
          const newState = error
            ? { books: [] }
            : BooksAPIUtils.addShelfBooksSearch(response, myBooks);
          this.setState({
            ...newState,
            loading: false,
          });
        }
      }).catch(err => console.error('deu ruim', err));
    } else {
      this.setState({
        books: [],
        loading: false,
      });
    }
  }

  render() {
    const { updateBook } = this.props;
    const { query, books, loading } = this.state;

    let listBooks = <ListBooks books={books} updateBook={updateBook} />;
    if (books.length === 0 && query !== '') {
      listBooks = <p>Nenhum livro encontrado.</p>;
    }

    return (
      <div className="search-books">
        <SearchBooksBar query={query} updateQuery={this.updateQuery} />
        <div className="search-books-results">
          <Loading status={loading}>
            {listBooks}
          </Loading>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  updateBook: PropTypes.func.isRequired,
  myBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchPage;
