import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myBooks: [],
    };
  }

  componentDidMount() {
    // Capturando todos os MEUS LIVROS da api
    BooksAPI.getAll().then(books => (
      this.setState({
        myBooks: books,
      })
    ));
  }

  addBook = (book) => {
    this.setState(currentState => ({
      myBooks: currentState.myBooks.concat([book]),
    }));
  }

  movBookShelf = (book, newShelf) => {
    const { myBooks } = this.state;

    const newMyBooks = myBooks.map((myBook) => {
      // Percorre por toda lista dos MyBooks já cadastrados para mudar shelf do livro atualizado
      if (myBook.id === book.id) {
        const newMyBook = myBook;
        newMyBook.shelf = newShelf;

        return newMyBook;
      }

      return myBook;
    });

    this.setState({
      myBooks: newMyBooks,
    });
  }

  delBook = (book) => {
    this.setState(currentState => ({
      myBooks: currentState.myBooks.filter(myBook => myBook.id !== book.id),
    }));
  }

  checkMyBooksHaveChanged = (resultUpdate) => {
    const { myBooks } = this.state;
    const currentLengthMyBooks = myBooks.length;

    const { currentlyReading, wantToRead, read } = resultUpdate;
    const newLengthMyBooks = currentlyReading.length + wantToRead.length + read.length;

    return currentLengthMyBooks !== newLengthMyBooks;
  }

  updateBook = (book, newShelf) => {
    // Atualizando shelf de um livro
    BooksAPI.update(book, newShelf).then((result) => {
      // Caso consiga atualizar
      if (newShelf === 'none') {
        this.delBook(book);
      } else if (this.checkMyBooksHaveChanged(result) === true) {
        this.addBook(book);
      } else {
        this.movBookShelf(book, newShelf);
      }
    });
  }

  render() {
    const { myBooks } = this.state;

    return (
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
          component={SearchPage}
        />
      </div>
    );
  }
}

export default BooksApp;
