import * as React from 'react';
import { DeckProps } from './deck.props';
import { Card } from '../card/card';
import './deck.css';

// delete this
import { CardType } from '../../models/card-types';
interface DeckState {
    cards: Array<{
        type: CardType;
        id: number;
        isOpen: boolean;
    }>;
    count: number;
}

export class Deck extends React.Component<DeckProps, DeckState> {
    constructor(props: DeckProps) {
        super(props);
        this.state = {cards: [...props.cards], count: 0}; // delete this
        this.flip = this.flip.bind(this);
    }

    render() {
        return (
            <div className="deck">
                {this.state.cards
                            .map(({id, type, isOpen}) =>
                                (<Card
                                    isOpen={isOpen}
                                    isMatched={false}
                                    onClick={() => this.flip(id)}
                                    key={id}
                                    type={type}
                                    disabled={false}
                                />))}
            </div>
        );
    }

    // delete this!!
    private flip(cardId: number) {
        this.setState((prevState) => {
            if (prevState.count < 2) {
                return {
                    count: prevState.count + 1,
                    cards: prevState.cards.map((card) => {
                        if (card.id === cardId) {
                            return {
                                ...card,
                                isOpen: !card.isOpen,
                            };
                        }
                        return card;
                    })
                };
            } else {
                return {
                    count: 0,
                    cards: prevState.cards.map((card) => ({
                        ...card,
                        isOpen: false,
                    })),
                };
            }
        });
    }
}