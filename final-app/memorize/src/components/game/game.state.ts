export interface Card {
    value: string;
    id: number;
}

export interface MatchedCards {
    [id: number]: boolean;
}

export type SelectedCard = number | null;

export class GameState {
    cards: Card[];
    matchedCards: MatchedCards;
    card1: SelectedCard;
    card2: SelectedCard;
    moves: number;
    gameEnded: boolean;
}

export interface GameActions {
    startGame(): void;
    selectCard(id: number): void;
}