/* https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303 */
import React from 'react';
import PropTypes from 'prop-types';

const ReactRouterDOM = require('react-router-dom');

ReactRouterDOM.BrowserRouter = ({ children }) => <div>{children}</div>;

ReactRouterDOM.BrowserRouter.propTypes = {
  children: PropTypes.element.isRequired,
};

module.exports = ReactRouterDOM;
