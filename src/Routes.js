import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Detail from './components/AlbumSection/Detail';

function Routes() {
  return (
    <Switch>
      <Route path={'/:albumId'} component={Detail} />
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;