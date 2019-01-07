import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from 'api/BooksAPI';
import * as BooksAPIUtils from 'utils/BooksAPIUtils';

import Loading from 'components/Loading';
import ListBooks from 'components/ListBooks';
import SearchBooksBar from 'components/SearchBooksBar';

class SearchPage extends Component {
  state = {
    query: '',
    books: [],
    loading: false,
  }

  /** Atualiza a query e consulta os livros na API. */
  updateQuery = (newQuery) => {
    this.setState({
      query: newQuery,
      loading: true,
    });

    if (newQuery !== '') {
      /* Se a query a ser persquisada não for vázia.
        Realiza uma requisição utilizando a query para API.
      */
      BooksAPI.search(newQuery).then((response) => {
        /* Quando a requisição tiver sido concluída. */
        const { query } = this.state;
        const { myBooks } = this.props;

        if (query === newQuery) {
          /* Caso a query atual seja a mesma que foi feita na hora requisição. */
          const { error } = response;
          const newState = error
            ? { books: [] }
            : BooksAPIUtils.addShelfBooksSearch(response, myBooks);
          this.setState({
            ...newState,
            loading: false,
          });
        }
      });
    } else {
      /* Se a query a ser persquisada for vázia. */
      this.setState({
        books: [],
        loading: false,
      });
    }
  }


  /** Atualiza a prateleira de um livro. */
  updateBookSearch = (book, newShelf) => {
    const { updateBook } = this.props;
    const { books } = this.state;
    // Utilizando o método passado nas props, atualiza a prateleira do livro.
    updateBook(book, newShelf);

    // Atualiza as prateleiras do livros pesquisados na consulta.
    const newBooks = BooksAPIUtils.setShelfBook(book, books, newShelf);
    this.setState({
      books: newBooks,
    });
  }

  render() {
    const { query, books, loading } = this.state;

    let listBooks = <ListBooks books={books} updateBook={this.updateBookSearch} />;
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
  /** Function responsible for updating book shelf. */
  updateBook: PropTypes.func.isRequired,
  /** List of books on the shelf. */
  myBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchPage;
