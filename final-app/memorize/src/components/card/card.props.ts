import { CardType } from '../../models/card-types';

export interface CardProps {
    isOpen: boolean;
    isMatched: boolean;
    type: CardType;
    onClick(): void;
}
