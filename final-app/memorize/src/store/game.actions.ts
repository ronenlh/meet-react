// import { Action, ActionCreator } from 'redux';
// import { CardType } from '../models/card-types';

// // Game Actions
// // init
// const SHUFFLE_CARDS: Action = {
//     type: 'SHUFFLE_CARDS'
// };

// const setCards: ActionCreator<Action> = (shuffledCards: {[id: number]: CardType}) => ({
//     type: 'SET_CARDS',
//     payload: {shuffledCards}
// });

// // moves
// const pickFirstCard: ActionCreator<Action> = (id: number | null) => ({
//     type: 'PICK_FIRST_CARD',
//     payload: { id }
// });

// const pickSecondCard: ActionCreator<Action> = (id: number | null) => ({
//     type: 'PICK_SECOND_CARD',
//     payload: { id }
// });

// const MATCH: Action = {
//     type: 'CARDS_MATCH'
// };

// const setMatchedCards: ActionCreator<Action> = (id1: number, id2: number) => ({
//     type: 'SET_MATCHED_CARDS',
//     payload: {
//         card1: id1,
//         card2: id2,
//     }
// });

// const NOT_MATCH: Action = {
//     type: 'CARDS_NOT_MATCH'
// };

// const END_OF_GAME: Action = {
//     type: 'GAME_ENDED'
// };

// // Count steps
// const RESET_STEPS: Action = {
//     type: 'STEPS_RESET'
// };

// const INCREMENT_STEPS: Action = {
//     type: 'STEPS_INCREMENT'
// };

// // Count time
// const RESET_TIMER: Action = {
//     type: 'TIMER_RESET'
// };
// const START_TIMER: Action = {
//     type: 'TIMER_START'
// };
// const INCREMENT_TIMER: Action = {
//     type: 'TIMER_INCREMENT'
// };
// const STOP_TIMER: Action = {
//     type: 'TIMER_STOP'
// };
