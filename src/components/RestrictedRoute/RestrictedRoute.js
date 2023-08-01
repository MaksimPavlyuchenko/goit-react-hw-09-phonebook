import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectIsLoggedIn } from 'redux/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
  Component: PropTypes.element,
  redirectTo: PropTypes.string,
};
