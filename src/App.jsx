import React from 'react';
import { Route } from 'react-router-dom';

// import * as BooksAPI from './BooksAPI'
import './App.css';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';

const BooksApp = () => (
  <div className="app">
    <Route
      exact
      path="/"
      component={HomePage}
    />
    <Route
      path="/search"
      component={SearchPage}
    />
  </div>
);

export default BooksApp;
