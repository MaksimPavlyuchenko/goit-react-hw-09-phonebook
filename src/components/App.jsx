import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';

import HeaderLayout from './HeaderLayout/HeaderLayout';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import { selectRefresh } from 'redux/selectors';
import { userRefresh } from 'redux/operationsUser';

const Contacts = lazy(() => import('./Contacts/Contacts'));
const LogIn = lazy(() => import('./LogIn/LogIn'));
const Register = lazy(() => import('./Register/Register'));

const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return isRefresh ? (
    <h1>LOADING....</h1>
  ) : (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={LogIn} redirectTo="/contacts" />}
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
