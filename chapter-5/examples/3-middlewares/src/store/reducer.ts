import { Reducer, AnyAction } from 'redux';
import { CounterState, initialState } from './initial-state';
import { SET_COUNTER } from './types';

export const counterReducer: Reducer = (state: CounterState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_COUNTER: 
            return {
                count: action.payload,
            }
        default:
            return state
    }
}