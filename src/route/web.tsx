import React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';

const RouteWithSubRoutes = (route: any) => (
    <Route
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
    />
);

interface RouteFace {
    path: string;
    component: RouteProps['component'];
}

const supportsHistory = 'pushState' in window.history;

const Router = (routers: Array<RouteFace>): any => (
    <BrowserRouter forceRefresh={!supportsHistory}>
        <div>
            {routers.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    </BrowserRouter>
);

export default Router;
