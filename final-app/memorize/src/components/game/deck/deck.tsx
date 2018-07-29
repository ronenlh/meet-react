import * as React from 'react';
import './deck.css';
import { Card } from '../card/card';

interface DeckProps {
    cards: Array<{
        id: number;
        value: string;
    }>;
}

export class Deck extends React.Component<DeckProps> {
    render() {
        return (
            <div className="deck">
                {this.props.cards
                    .map(({ id, value }) =>
                        (<Card
                            isOpen={true}
                            onClick={() => { /**/ }}
                            key={id}
                            value={value}
                            disabled={false}
                            isMatched={false}
                        />))}
            </div>
        );
    }
}