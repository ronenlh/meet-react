import { CardType } from '../../models/card-types';

export interface DeckProps {
    cards: Array<{
        type: CardType;
        id: number;
        isFlipped: boolean;
    }>;
}