import React from 'react';
import { Route } from 'react-router-dom';

import PageA from '../pages/pageA';
import PageB from '../pages/pageB';

export default [
    <Route path="/a" key="a" component={PageA} />,
    <Route path="/b" key="b" component={PageB} />
];
