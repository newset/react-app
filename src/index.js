import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './redux/store';
// // import registerServiceWorker from './registerServiceWorker';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <div>test</div>
    </Provider>,
    document.getElementById('root')
);
// <App />

// registerServiceWorker();
