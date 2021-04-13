import React, { Suspense, useEffect, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import HomeView from './views/HomeView';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import ContactsView from './views/ContactsView/ContactsView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import AppBar from './components/AppBar/AppBar';
import { getCurrentUser } from './redux/auth/auth-operations';

import * as contactSelectors from '../src/redux/contact/contact-selectors';

const App = ({ loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/" restricted redirectTo="/contacts">
            <HomeView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: contactSelectors.getLoading(state),
  };
};

export default connect(mapStateToProps, null)(App);
