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
      booksSearch: [],
      query: '',
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

  addBook = (book, newShelf) => {
    const newBook = book;
    newBook.shelf = newShelf;

    this.setState(currentState => ({
      myBooks: currentState.myBooks.concat([newBook]),
    }));
  }

  setShelfBook = (book, books, newShelf) => {
    const newBooks = books.map((myBook) => {
      // Percorre por toda lista dos MyBooks já cadastrados para mudar shelf do livro atualizado
      if (myBook.id === book.id) {
        const newMyBook = myBook;
        newMyBook.shelf = newShelf;

        return newMyBook;
      }
      return myBook;
    });

    return newBooks;
  }

  movBookShelf = (book, newShelf) => {
    const { myBooks, booksSearch } = this.state;

    const newMyBooks = this.setShelfBook(book, myBooks, newShelf);
    const newBooksSearch = this.setShelfBook(book, booksSearch, newShelf);

    this.setState({
      myBooks: newMyBooks,
      booksSearch: newBooksSearch,
    });
  }

  delBook = (book) => {
    const { booksSearch } = this.state;
    const newBooksSearch = this.setShelfBook(book, booksSearch, 'none');

    this.setState(currentState => ({
      myBooks: currentState.myBooks.filter(myBook => myBook.id !== book.id),
      booksSearch: newBooksSearch,
    }));
  }

  checkMyBooksHaveChanged = (resultUpdate) => {
    const { myBooks } = this.state;
    const currentLengthMyBooks = myBooks.length;

    const { currentlyReading, wantToRead, read } = resultUpdate;
    const newLengthMyBooks = currentlyReading.length + wantToRead.length + read.length;

    return currentLengthMyBooks !== newLengthMyBooks;
  }

  getShelfBook = (book) => {
    const { myBooks } = this.state;

    const filterBook = myBooks.filter(myBook => myBook.id === book.id);

    if (filterBook.length > 0) {
      return filterBook[0].shelf;
    }
    return 'none';
  }

  addShelfBooksSearch = (booksSearch) => {
    const books = booksSearch.map((bookSearch) => {
      const book = bookSearch;
      book.shelf = this.getShelfBook(book);

      return book;
    });

    return books;
  }

  updateBook = (book, newShelf) => {
    // Atualizando shelf de um livro
    BooksAPI.update(book, newShelf).then((result) => {
      // Caso consiga atualizar
      if (newShelf === 'none') {
        this.delBook(book);
      } else if (this.checkMyBooksHaveChanged(result) === true) {
        this.addBook(book, newShelf);
      } else {
        this.movBookShelf(book, newShelf);
      }
    });
  }

  updateQuery = (newQuery) => {
    this.setState({
      query: newQuery,
    });

    if (newQuery !== '') {
      BooksAPI.search(newQuery).then((response) => {
        const { error } = response;
        const booksSearch = error ? [] : this.addShelfBooksSearch(response);

        this.setState({
          booksSearch,
        });
      }).catch(err => console.error('deu ruim', err));
    }
  }

  render() {
    const { myBooks, booksSearch, query } = this.state;

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
          render={() => (
            <SearchPage
              books={booksSearch}
              query={query}
              updateQuery={this.updateQuery}
              updateBook={this.updateBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
