import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import SearchPage from 'pages/SearchPage';
import SwitchRoutesAnimated from 'components/animations/SwitchRoutesAnimated';

const Routes = ({ myBooks, updateBook }) => (
  <SwitchRoutesAnimated>
    <Route
      exact
      path="/"
      render={() => (
        <HomePage myBooks={myBooks} updateBook={updateBook} />
      )}
    />
    <Route
      path="/search"
      render={() => (
        <SearchPage myBooks={myBooks} updateBook={updateBook} />
      )}
    />
  </SwitchRoutesAnimated>
);

Routes.propTypes = {
  myBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default Routes;
