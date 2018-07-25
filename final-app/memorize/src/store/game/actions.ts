import { SET_CARDS, SET_MATCHED_CARDS, SET_GAME_ENDED, SET_MOVES, START_GAME, SELECT_CARD, SET_FIRST_CARD, SET_SECOND_CARD } from './types';
import { GameState } from './initial-state';

// Game Actions
// init
export const startGame = () => ({
    type: START_GAME
});

export const setCards = (cards: GameState['cards']) => ({
    type: SET_CARDS,
    payload: cards
});

// moves
export const selectCard = (id: number) => ({
    type: SELECT_CARD,
    payload: { id }
});

export const setFirstCard = (id: GameState['card1']) => ({
    type: SET_FIRST_CARD,
    payload: id
});

export const setSecondCard = (id: GameState['card2']) => ({
    type: SET_SECOND_CARD,
    payload: id,
});

export const setMatchedCards = (matchedCards: GameState['matchedCards']) => ({
    type: SET_MATCHED_CARDS,
    payload: matchedCards
});

export const setGameEnded = (isEnded: boolean) => ({
    type: SET_GAME_ENDED,
    payload: isEnded
});

// Count steps
export const setMoves = (moves: number) => ({
    type: SET_MOVES,
    payload: moves
});
