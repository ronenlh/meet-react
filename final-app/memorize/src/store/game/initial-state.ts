import { CARDS, CardType } from '../../models/card-types';

export interface GameState {
    cards: Array<{
        type: CardType;
        id: number;
        isOpen: boolean;
    }>;
    card1: number | null;
    card2: number | null;
    moves: number;
    time: number;
}

export const initialState: GameState = {
    cards: CARDS,
    card1: null,
    card2: null,
    moves: 0,
    time: 0,
};