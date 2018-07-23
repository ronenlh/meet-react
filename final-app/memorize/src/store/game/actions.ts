import { Action, ActionCreator } from 'redux';
import { CardType } from '../../models/card-types';
import { SHUFFLE_CARDS, SET_CARDS, PICK_FIRST_CARD, PICK_SECOND_CARD, CARDS_MATCH, SET_MATCHED_CARDS, CARDS_NOT_MATCH, GAME_ENDED, STEPS_RESET, STEPS_INCREMENT, TIMER_RESET, TIMER_START, TIMER_INCREMENT, TIMER_STOP, START_GAME } from './types';

// Game Actions
// init
export const startGame: ActionCreator<Action> = () => ({
    type: START_GAME
});

export const shuffleCards: ActionCreator<Action> = () => ({
    type: SHUFFLE_CARDS
});

export const setCards: ActionCreator<Action<string>> = (shuffledCards: {[id: number]: CardType}) => ({
    type: SET_CARDS,
    payload: {shuffledCards}
});

// moves
export const pickFirstCard: ActionCreator<Action> = (id: number | null) => ({
    type: PICK_FIRST_CARD,
    payload: { id }
});

export const pickSecondCard: ActionCreator<Action> = (id: number | null) => ({
    type: PICK_SECOND_CARD,
    payload: { id }
});

export const cardsMatch: ActionCreator<Action> = () => ({
    type: CARDS_MATCH
});

export const setMatchedCards: ActionCreator<Action> = (id1: number, id2: number) => ({
    type: SET_MATCHED_CARDS,
    payload: {
        card1: id1,
        card2: id2,
    }
});

export const cardsNotMatch: ActionCreator<Action> = () => ({
    type: CARDS_NOT_MATCH
});

export const gameEnded: ActionCreator<Action> = () => ({
    type: GAME_ENDED
});

// Count steps
export const resetSteps: ActionCreator<Action> = () => ({
    type: STEPS_RESET
});

export const incrementSteps: ActionCreator<Action> = () => ({
    type: STEPS_INCREMENT
});

// Count time
export const resetTimer: ActionCreator<Action> = () => ({
    type: TIMER_RESET
});
export const startTimer: ActionCreator<Action> = () => ({
    type: TIMER_START
});

export const incrementTimer: ActionCreator<Action> = () => ({
    type: TIMER_INCREMENT
});

export const stopTimer: ActionCreator<Action> = () => ({
    type: TIMER_STOP
});
