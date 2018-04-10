import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import createStore from './redux/store';
import routes from './route';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <BrowserRouter>
                <div>{routes}</div>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
