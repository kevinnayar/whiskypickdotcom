import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components-core/Header/Header';
import WhiskyListContainer from './containers/WhiskyListContainer/WhiskyListContainer';
import WhiskyContainer from './containers/WhiskyContainer/WhiskyContainer';
import UserListContainer from './containers/UserListContainer/UserListContainer';
import UserContainer from './containers/UserContainer/UserContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={WhiskyListContainer} />
        <Route path="/whiskies" exact component={WhiskyListContainer} />
        <Route path="/whiskies/:whiskyId" component={WhiskyContainer} />
        <Route path="/users" exact component={UserListContainer} />
        <Route path="/users/:userId" component={UserContainer} />
      </Switch>
    </BrowserRouter>
  );
}
