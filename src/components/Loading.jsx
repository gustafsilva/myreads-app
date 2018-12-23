import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

const Loading = ({ status, className, children }) => (
  status === true
    ? <ReactLoading className={className} type="spin" color="#2e7c31" />
    : children
);

Loading.defaultProps = {
  className: 'loading',
};

Loading.propTypes = {
  status: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Loading;
