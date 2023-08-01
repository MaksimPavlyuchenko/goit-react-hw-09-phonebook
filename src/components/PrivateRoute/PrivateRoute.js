import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectIsLoggedIn, selectRefresh } from 'redux/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectRefresh);

  return !isLoggedIn && !isRefresh ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  Component: PropTypes.element,
  redirectTo: PropTypes.string,
};
