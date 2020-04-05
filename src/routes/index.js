import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';

const Routes = () => (
  <div>
    <Route exact path="/" component={Frame} />
    <Route exact path = "/" component={Home} />
    <Route path="/detail" component={Detail} />
  </div>
);

export default Routes;
