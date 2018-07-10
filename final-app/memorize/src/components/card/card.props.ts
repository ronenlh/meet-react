import { CardType } from '../../models/card-types';

export interface CardProps {
    isFlipped: boolean;
    type: CardType;
    onClick(): void;
}
