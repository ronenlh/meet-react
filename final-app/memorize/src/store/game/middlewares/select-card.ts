import { Middleware, Store } from 'redux';
import * as actions from '../actions';
import { SELECT_CARD } from '../types';
import { GameState } from '../initial-state';

export const selectCardMiddleware: Middleware = (store: Store<GameState>) => (next) => (action) => {
    if (action.type !== SELECT_CARD) {
        return next(action);
    }

    const firstCardId = store.getState().card1;
    if (firstCardId === null) {
        // set card 1
        next(actions.setFirstCard(action.payload.id));
        return;
    }
    // set card 2
    next(actions.setMoves(store.getState().moves + 1)); // increment moves
    const secondCardId = action.payload.id;
    store.dispatch(actions.setSecondCard(secondCardId));

    const firstCardType = store.getState().cards.find((card) => card.id === firstCardId);
    const secondCardType = store.getState().cards.find((card) => card.id === secondCardId);

    const isMatched = firstCardType && secondCardType && firstCardType.value === secondCardType.value;
    setTimeout(() => {
        if (isMatched) {
            store.dispatch(actions.setMatchedCards({
                ...store.getState().matchedCards,
                [firstCardId]: true,
                [secondCardId]: true,
            }));

            if ((Object.keys(store.getState().matchedCards).length) === store.getState().cards.length) {
                store.dispatch(actions.setGameEnded(true));
            }
        }
        store.dispatch(actions.setSecondCard(null));
        store.dispatch(actions.setFirstCard(null));
    }, 1000);
};