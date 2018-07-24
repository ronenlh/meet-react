import { CardType } from '../../models/card-types';

export interface GameState {
    cards: Array<{
        value: CardType;
        id: number;
    }>;
    matchedCards: {[id: number]: boolean};
    card1: number | null;
    card2: number | null;
    moves: number;
}

export const initialState: GameState = {
    cards: [
        {
          value: '😃',
          id: 0,
        },
        {
          value: '🚀',
          id: 1,
        },
        {
          value: '🎉',
          id: 2,
        },
        {
          value: '🍻',
          id: 3,
        },
        {
          value: '💩',
          id: 4,
        },
        {
          value: '🐸',
          id: 5,
        },
        {
          value: '🦄',
          id: 6,
        },
        {
          value: '🌈',
          id: 7,
        },
        {
          value: '🍌',
          id: 8,
        },
        {
          value: '🍕',
          id: 9,
        },
        {
          value: '😃',
          id: 10,
        },
        {
          value: '🚀',
          id: 11,
        },
        {
          value: '🎉',
          id: 12,
        },
        {
          value: '🍻',
          id: 13,
        },
        {
          value: '💩',
          id: 14,
        },
        {
          value: '🐸',
          id: 15,
        },
        {
          value: '🦄',
          id: 16,
        },
        {
          value: '🌈',
          id: 17,
        },
        {
          value: '🍌',
          id: 18,
        },
        {
          value: '🍕',
          id: 19,
        }
      ],
    matchedCards: {},
    card1: null,
    card2: null,
    moves: 0,
};