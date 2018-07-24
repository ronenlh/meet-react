import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/game/actions';
import './deck.css';
import { Card } from '../card/card';
import { GameState } from '../../store/game/initial-state';

type DeckProps = PropsFromState & PropsFromDispatch;
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

type PropsFromState =  Pick<GameState, 'cards' | 'matchedCards' | 'card1' | 'card2'>;
const mapStateToProps = (state: GameState): PropsFromState => {
    return {
        card1: state.card1,
        card2: state.card2,
        cards: state.cards,
        matchedCards: state.matchedCards
    };
};

interface PropsFromDispatch {
    selectCard: typeof actions.selectCard;
}
const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    selectCard: (id: number) => dispatch(actions.selectCard(id))
});

export const ConnectedDeck = connect(mapStateToProps, mapDispatchToProps)(Deck);