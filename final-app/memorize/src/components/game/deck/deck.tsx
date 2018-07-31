import * as React from 'react';
import './deck.css';
import { Card } from '../card/card';
import { GameActions, GameState } from '../game.state';

type DeckProps  = Pick<GameState, 'cards' | 'card1' | 'card2' | 'matchedCards' >& GameActions;
export class Deck extends React.Component<DeckProps> {
    render() {
        return (
            <div className="deck">
                {this.props.cards
                    .map(({ id, value }) =>
                        (<Card
                            isOpen={this.isOpen(id)}
                            onClick={() => this.props.selectCard(id)}
                            key={id}
                            value={value}
                            disabled={this.isDisabled(id)}
                            isMatched={this.isMatched(id)}
                        />))}
            </div>
        );
    }

    private isOpen(id: number) {
        return id === this.props.card1 || id === this.props.card2;
    }
    private isDisabled(id: number) {
        if (this.props.card1 !== null && this.props.card2 !== null) { // during transition
            return true;
        }

        if (this.props.card1 === id) { // already picked
            return true;
        }

        return false;
    }

    private isMatched(id: number) {
        return !!this.props.matchedCards[id];
    }
}