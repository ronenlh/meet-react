import * as React from 'react';
import { DeckProps } from './deck.props';
import { Card } from '../card/card';
import './deck.css';

export class Deck extends React.Component<DeckProps> {

    render() {
        return (
            <div className="deck">
                {this.props.cards
                            .map(({id, type, isFlipped}) =>
                                    (<Card isFlipped={isFlipped} onClick={() => this.flip(id)} key={id} type={type}/>))}
            </div>
        );
    }

    private flip(cardId: number) {
        // tslint:disable-next-line:no-console
        console.log(cardId);
    }
}