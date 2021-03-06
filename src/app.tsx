import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components-core/Header/Header';

import HomeContainer from './containers/HomeContainer/HomeContainer';
import WhiskyListContainer from './containers/WhiskyListContainer/WhiskyListContainer';
import WhiskyContainer from './containers/WhiskyContainer/WhiskyContainer';
import UserListContainer from './containers/UserListContainer/UserListContainer';
import UserContainer from './containers/UserContainer/UserContainer';
import AdminContainer from './containers/AdminContainer/AdminContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Redirect from="/" exact to="/whiskies" /> */}
        <Route path="/" exact component={HomeContainer} />
        <Route path="/whiskies" exact component={WhiskyListContainer} />
        <Route path="/whiskies/:whiskyId" component={WhiskyContainer} />
        <Route path="/users" exact component={UserListContainer} />
        <Route path="/users/:userId" component={UserContainer} />
        <Route path="/admin" component={AdminContainer} />
      </Switch>
    </BrowserRouter>
  );
}
