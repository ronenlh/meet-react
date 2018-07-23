import { createStore } from 'redux';
import { gameReducer } from './game';

export const store = createStore(gameReducer);
