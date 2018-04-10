import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

export default initialState => {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleware.run(saga);
  return store;
};
