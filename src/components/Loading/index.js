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
  /** Flag that indicates whether load icon should be rendered. */
  status: PropTypes.bool.isRequired,
  /** Component child to be rendered, when status equals false. */
  children: PropTypes.element.isRequired,
  /** Icon class. */
  className: PropTypes.string,
};

export default Loading;
