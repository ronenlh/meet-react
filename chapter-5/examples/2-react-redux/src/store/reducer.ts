import { Reducer, Action } from 'redux';
import { CounterState, initialState } from './initial-state';
import { INCREMENT, DECREMENT } from './types';

export const counterReducer: Reducer = (state: CounterState = initialState, action: Action) => {
    switch (action.type) {
        case INCREMENT: 
            return {
                count: state.count + 1
            }
        case DECREMENT: 
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}