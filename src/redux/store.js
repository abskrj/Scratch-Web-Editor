import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';

const middlewares = [];

const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
