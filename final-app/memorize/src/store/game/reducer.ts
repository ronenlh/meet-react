import { Reducer } from 'redux';
import { initialState, GameState } from './initial-state';
import { SET_CARDS, SET_FIRST_CARD, SET_MATCHED_CARDS, SET_SECOND_CARD, STEPS_INCREMENT, STEPS_RESET, SET_GAME_ENDED } from './types';

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
                card1: action.payload.id,
            };
        case SET_SECOND_CARD:
            return {
                ...state,
                card2: action.payload.id,
            };
        case SET_MATCHED_CARDS:
            return {
                ...state,
                matchedCards: {
                    ...state.matchedCards,
                    [action.payload[0]]: true,
                    [action.payload[1]]: true,
                },
            };
        case STEPS_INCREMENT:
            return {
                ...state,
                moves: state.moves + 1,
            };
        case STEPS_RESET:
            return {
                ...state,
                moves: 0,
            };
        case SET_GAME_ENDED:
            return {
                ...state,
                gameFinished: action.payload,
            };
        default:
            return state;
    }
};
