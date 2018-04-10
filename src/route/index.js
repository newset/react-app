import React from 'react';
import { Route } from 'react-router-dom';

import App from '../App';

import PageA from '../pages/pageA';
import PageB from '../pages/pageB';

export default [
    <Route path="/" key="app" component={App} />,
    <Route path="/a" key="a" component={PageA} />,
    <Route path="/b" key="b" component={PageB} />
];
