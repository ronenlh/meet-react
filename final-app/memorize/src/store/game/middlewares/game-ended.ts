import { Middleware, Store } from 'redux';
import { GAME_ENDED } from '../types';
import { GameState } from '../initial-state';

export const gameEndedMiddleware: Middleware = (store: Store<GameState>) => (next) => (action) => {
    if (action.type !== GAME_ENDED) {
        return next(action);
    }
    // do something..
};