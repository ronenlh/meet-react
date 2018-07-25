import { createStore, applyMiddleware } from 'redux';
import { gameReducer, gameMiddlewares } from './game';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [createLogger(), ...gameMiddlewares];
export const store = createStore(gameReducer, composeWithDevTools(applyMiddleware(...middlewares)));
