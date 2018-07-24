import { createStore, applyMiddleware } from 'redux';
import { gameReducer, gameMiddlewares } from './game';
import { createLogger } from 'redux-logger';

const middlewares = [createLogger(), ...gameMiddlewares];
export const store = createStore(gameReducer, applyMiddleware(...middlewares));
