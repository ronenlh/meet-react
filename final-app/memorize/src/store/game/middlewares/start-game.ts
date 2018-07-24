import { Middleware, Store } from 'redux';
import { setCards } from '../actions';
import { START_GAME } from '../types';
import { shuffle } from '../../../utils/shuffle';
import { GameState } from '../initial-state';

export const startGameMiddleware: Middleware = (store: Store<GameState>) => (next) => (action) => {
    if (action.type !== START_GAME) {
        return next(action);
    }
    const shuffledCards = shuffle(store.getState().cards);
    store.dispatch(setCards(shuffledCards));

};