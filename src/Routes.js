import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';

import Player from './Player';
import Detail from './components/AlbumSection/Detail';

function Routes() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`/:albumId`}>
        <Detail />
      </Route>
      <Route exact path="/">
        <Player />
      </Route>
    </Switch>
  );
}

export default Routes;