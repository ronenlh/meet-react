import { CardType } from '../../models/card-types';

export interface CardProps {
    isOpen: boolean;
    disabled: boolean;
    value: CardType;
    isMatched: boolean;
    onClick(): void;
}
