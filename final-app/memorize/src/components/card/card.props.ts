import { CardType } from '../../models/card-types';

export interface CardProps {
    isOpen: boolean;
    isMatched: boolean;
    disabled: boolean;
    type: CardType;
    onClick(): void;
}
