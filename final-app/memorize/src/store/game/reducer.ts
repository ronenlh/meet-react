import { Reducer } from 'redux';
import { initialState, GameState } from './initial-state';
import { SET_CARDS, SET_FIRST_CARD, SET_MATCHED_CARDS, SET_SECOND_CARD, SET_GAME_ENDED, SET_MOVES } from './types';

export const gameReducer: Reducer = (state: GameState = initialState, action) => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state,
                cards: action.payload,
            };
        case SET_FIRST_CARD:
            return {
                ...state,
                card1: action.payload,
            };
        case SET_SECOND_CARD:
            return {
                ...state,
                card2: action.payload,
            };
        case SET_MATCHED_CARDS:
            return {
                ...state,
                matchedCards: action.payload,
            };
        case SET_MOVES:
            return {
                ...state,
                moves: action.payload,
            };
        case SET_GAME_ENDED:
            return {
                ...state,
                gameEnded: action.payload,
            };
        default:
            return state;
    }
};
