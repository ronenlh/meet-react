
import * as React from 'react';
import { Deck } from '../deck/deck';
import { ScorePanel } from '../score-panel/score-panel';
import './game-board.css';
import { Logo } from '../../logo/logo';
import { GameState, GameActions } from '../game.state';

type GameBoardProps = GameState & GameActions;
export class GameBoard extends React.Component<GameBoardProps> {
    componentDidMount() {
        this.props.startGame();
    }

    render() {
        return (
            <div className="game-board">
                <div className="header">
                    <Logo size="small"/>
                    <ScorePanel moves={this.props.moves}/>
                </div>
                <div className="container">
                    <Deck
                        startGame={this.props.startGame}
                        selectCard={this.props.selectCard}
                        card1={this.props.card1}
                        card2={this.props.card2}
                        cards={this.props.cards}
                        matchedCards={this.props.matchedCards}
                    />
                </div>
            </div>
        );
    }
}
