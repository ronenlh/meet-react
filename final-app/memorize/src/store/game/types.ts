// Commands
export const SHUFFLE_CARDS = '@GAME/SHUFFLE_CARDS'; // command
export const START_GAME = '@GAME/START_GAME'; // command
export const SELECT_CARD = '@GAME/SELECT_CARD'; // command

// Derived commands
export const PICK_FIRST_CARD = '@GAME/PICK_FIRST_CARD'; // command
export const PICK_SECOND_CARD = '@GAME/PICK_SECOND_CARD'; // command
export const CARDS_MATCH = '@GAME/CARDS_MATCH'; // derived command
export const GAME_ENDED = '@GAME/GAME_ENDED'; // derived command

// Document
export const SET_CARDS = '@GAME/SET_CARDS'; // document
export const SET_FIRST_CARD = '@GAME/SET_FIRST_CARD'; // document
export const SET_SECOND_CARD = '@GAME/SET_SECOND_CARD'; // document
export const SET_MATCHED_CARDS = '@GAME/SET_MATCHED_CARDS'; // document
export const STEPS_INCREMENT = '@GAME/STEPS_INCREMENT'; // derived command
export const STEPS_RESET = '@GAME/STEPS_RESET'; // derived command
