export interface CardProps {
    isOpen: boolean;
    disabled: boolean;
    value: string;
    isMatched: boolean;
    onClick(): void;
}
