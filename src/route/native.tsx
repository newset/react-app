import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

interface RouteFace {
    path: string;
    page: React.ComponentType<any>;
    key: string;
}

const NativeRouter = (routers: Array<RouteFace>): any => (
    <Router>
        <Stack key="root">
            {routers.map(route => (
                <Scene
                    path={route.path}
                    key={route.key}
                    component={route.page}
                    {...route}
                />
            ))}
        </Stack>
    </Router>
);

export default NativeRouter;
