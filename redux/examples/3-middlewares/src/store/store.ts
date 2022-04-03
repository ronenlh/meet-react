import { createStore, applyMiddleware } from 'redux';
import { counterReducer } from './reducer';
import { counterMiddleware } from './counter.middleware';
// import { loggerMiddleware } from './logger.middleware';

const middlewares = [counterMiddleware];
export const store = createStore(counterReducer, applyMiddleware(...middlewares));
