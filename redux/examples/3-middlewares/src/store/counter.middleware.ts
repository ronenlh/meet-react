import { Store, Middleware } from 'redux';
import { CounterState } from './initial-state';
import { INCREMENT, DECREMENT } from './types';
import * as actions from './actions';

export const counterMiddleware: Middleware = (store: Store<CounterState>) => (next) => (action) => {
    switch(action.type) {
        case INCREMENT: 
            next(actions.setCounter(store.getState().count + 1));
            return;

        case DECREMENT:
            next(actions.setCounter(store.getState().count - 1));
            return;
    }
}