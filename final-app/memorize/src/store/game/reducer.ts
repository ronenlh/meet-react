import { Reducer } from 'redux';
import { initialState } from './initial-state';
// import { SET_CARDS, SET_FIRST_CARD, SET_SECOND_CARD, SET_MATCHED_CARDS, SET_STEPS, SET_TIMER } from './types';

export const gameReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_CARDS:
        // case SET_FIRST_CARD:
        // case SET_SECOND_CARD:
        // case SET_MATCHED_CARDS:
        // case SET_STEPS:
        // case SET_TIMER:

        default:
            return state;
    }
};
