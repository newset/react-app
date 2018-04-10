import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import saga from './saga';

const createStoreWithMiddleware = applyMiddleware(createSagaMiddleware)(createStore);

export default (initialState) => {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    sagaMiddleware.run(mySaga);
    return store;
};
