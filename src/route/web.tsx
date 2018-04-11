import React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';

interface RouteFace {
    path: string;
    page: RouteProps['component'];
    key?: string;
}

const supportsHistory = 'pushState' in window.history;

const Router = (routers: Array<RouteFace>): any => (
    <BrowserRouter forceRefresh={!supportsHistory}>
        <div>
            {routers.map(route => (
                <Route
                    path={route.path}
                    component={route.page}
                    key={route.key}
                />
            ))}
        </div>
    </BrowserRouter>
);

export default Router;
