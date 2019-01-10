import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

const RouteContainerAnimated = posed.div({
  enter: { opacity: 1, delay: 170, beforeChildren: true },
  exit: { opacity: 0 },
});

const SwitchRoutesAnimated = ({ children }) => (
  <Route
    render={({ location }) => (
      <PoseGroup>
        <RouteContainerAnimated key={location.pathname}>
          <Switch location={location}>
            {children}
          </Switch>
        </RouteContainerAnimated>
      </PoseGroup>
    )}
  />
);

SwitchRoutesAnimated.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default SwitchRoutesAnimated;
