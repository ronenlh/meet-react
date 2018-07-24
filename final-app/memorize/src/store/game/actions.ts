import { Action, ActionCreator } from 'redux';
import { CardType } from '../../models/card-types';
import { SHUFFLE_CARDS, SET_CARDS, CARDS_MATCH, SET_MATCHED_CARDS, SET_GAME_ENDED, STEPS_RESET, STEPS_INCREMENT, START_GAME, SELECT_CARD, SET_FIRST_CARD, SET_SECOND_CARD } from './types';
import { GameState } from './initial-state';

// Game Actions
// init
export const startGame: ActionCreator<Action> = () => ({
    type: START_GAME
});

export const shuffleCards: ActionCreator<Action> = () => ({
    type: SHUFFLE_CARDS
});

export const setCards: ActionCreator<Action<string>> = (cards: {[id: number]: CardType}) => ({
    type: SET_CARDS,
    payload: cards
});

// moves
export const selectCard: ActionCreator<Action> = (id: number) => ({
    type: SELECT_CARD,
    payload: { id }
});

export const setFirstCard: ActionCreator<Action> = (id: number) => ({
    type: SET_FIRST_CARD,
    payload: { id }
});

export const setSecondCard: ActionCreator<Action> = (id: number) => ({
    type: SET_SECOND_CARD,
    payload: { id }
});

export const cardsMatch: ActionCreator<Action> = () => ({
    type: CARDS_MATCH
});

export const setMatchedCards: ActionCreator<Action> = (matchedCards: GameState['matchedCards']) => ({
    type: SET_MATCHED_CARDS,
    payload: matchedCards
});

export const setGameEnded: ActionCreator<Action> = (isEnded: boolean) => ({
    type: SET_GAME_ENDED,
    payload: isEnded
});

// Count steps
export const resetSteps: ActionCreator<Action> = () => ({
    type: STEPS_RESET
});

export const incrementSteps: ActionCreator<Action> = () => ({
    type: STEPS_INCREMENT
});
