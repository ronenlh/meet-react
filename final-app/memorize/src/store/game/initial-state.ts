import { CardType } from '../../models/card-types';

export interface GameState {
    cards: Array<{
        value: string;
        id: number;
    }>;
    matchedCards: {[id: number]: boolean};
    card1: number | null;
    card2: number | null;
    moves: number;
    gameEnded: boolean;
}

export const initialState: GameState = {
    cards: [
        {
          value: CardType.smilyFace,
          id: 0,
        },
        {
          value: CardType.rocket,
          id: 1,
        },
        {
          value: CardType.party,
          id: 2,
        },
        {
          value: CardType.beer,
          id: 3,
        },
        {
          value: CardType.poo,
          id: 4,
        },
        {
          value: CardType.frog,
          id: 5,
        },
        {
          value: CardType.unicorn,
          id: 6,
        },
        {
          value: CardType.rainbow,
          id: 7,
        },
        {
          value: CardType.banana,
          id: 8,
        },
        {
          value: CardType.pizza,
          id: 9,
        },
        {
          value: CardType.smilyFace,
          id: 10,
        },
        {
          value: CardType.rocket,
          id: 11,
        },
        {
          value: CardType.party,
          id: 12,
        },
        {
          value: CardType.beer,
          id: 13,
        },
        {
          value: CardType.poo,
          id: 14,
        },
        {
          value: CardType.frog,
          id: 15,
        },
        {
          value: CardType.unicorn,
          id: 16,
        },
        {
          value: CardType.rainbow,
          id: 17,
        },
        {
          value: CardType.banana,
          id: 18,
        },
        {
          value: CardType.pizza,
          id: 19,
        }
      ],
    matchedCards: {},
    card1: null,
    card2: null,
    moves: 0,
    gameEnded: false,
};