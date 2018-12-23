import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './api/BooksAPI';
import * as BooksAPIUtils from './utils/BooksAPIUtils';
import './App.css';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import Loading from './components/Loading';

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myBooks: [],
      loading: true,
    };
  }

  componentDidMount() {
    // Capturando todos os MEUS LIVROS da api
    BooksAPI.getAll().then((books) => {
      this.setState({
        myBooks: books,
        loading: false,
      });
    }).catch(err => console.error('[componentDidMount] App -', err));
  }

  updateBook = (book, newShelf) => {
    // Atualizando shelf de um livro
    const { myBooks } = this.state;
    let newState = {};
    BooksAPI.update(book, newShelf).then((result) => {
      // Caso consiga atualizar
      if (newShelf === 'none') {
        newState = BooksAPIUtils.delBook(book, myBooks);
      } else if (BooksAPIUtils.checkMyBooksHaveChanged(result, myBooks) === true) {
        newState = BooksAPIUtils.addBook(book, newShelf, myBooks);
      } else {
        newState = BooksAPIUtils.movBookShelf(book, newShelf, myBooks);
      }
      this.setState({
        ...newState,
      });
    });
  }

  render() {
    const { myBooks, loading } = this.state;

    return (
      <Loading status={loading} className="loading center">
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <HomePage myBooks={myBooks} updateBook={this.updateBook} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchPage
                myBooks={myBooks}
                updateBook={this.updateBook}
              />
            )}
          />
        </div>
      </Loading>
    );
  }
}

export default BooksApp;
