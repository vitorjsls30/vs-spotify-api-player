import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';

import Player from './Player';
import Detail from './components/AlbumSection/Detail';

function Routes() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path="/" exact component={Player} />
      <Route path={`${match.path}/:albumId`}>
        <Detail />
      </Route>
    </Switch>
  );
}

export default Routes;