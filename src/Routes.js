import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import Home from './Home';
import Detail from './components/AlbumSection/Detail';

function Routes() {
  return (
    <Switch>
      <Route path={'/Dashboard/:albumId'} component={Detail} />
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/Dashboard">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;