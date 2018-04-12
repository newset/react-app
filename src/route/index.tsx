import React from 'react';
import getWebRoute from './web';
// import getNativeRoute from './native';

import App from '../App';
import PageA from '../pages/pageA';

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/a',
        component: PageA
    }
];

interface RouterProps {
    platform?: 'web' | 'native';
}

const Router = (props: RouterProps) => {
    return <div>{getWebRoute(routes)}</div>;
};

export default Router;
