import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import Router from './route/';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router platform="web" />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
