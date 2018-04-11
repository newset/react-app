import React from 'react';
import getWebRoute from './web';
import getNativeRoute from './native';

import App from '../App';
import PageA from '../pages/pageA';
import PageB from '../pages/pageB';

const routes = [
    {
        path: '/',
        page: App,
        key: 'index'
    },
    {
        path: '/a',
        page: PageA,
        key: 'a'
    },
    {
        path: '/b',
        page: PageB,
        key: 'b'
    }
];

interface RouterProps {
    platform?: 'web' | 'native';
}

const Router = (props: RouterProps) => {
    return (
        <div>
            {props.platform === 'native'
                ? getNativeRoute(routes)
                : getWebRoute(routes)}
        </div>
    );
};

export default Router;
