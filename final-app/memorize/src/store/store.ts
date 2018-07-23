import { createStore, combineReducers } from 'redux';
import { gameReducer } from './game';

const store = createStore(combineReducers({
    game: gameReducer
}));

export { store };