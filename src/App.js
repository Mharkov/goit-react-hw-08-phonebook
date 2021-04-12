import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView/ContactsView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import AppBar from './components/AppBar/AppBar';
import * as contactSelectors from '../src/redux/contact/contact-selectors';

const App = ({ loading }) => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/contacts" component={ContactsView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
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
