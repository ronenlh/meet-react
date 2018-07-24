
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../store/game/actions';
import { ConnectedDeck } from '../deck/deck';
import { ConnectedScorePanel } from '../score-panel/score-panel';
import './game-board.css';
import { GameState } from '../../../store/game/initial-state';
import { Congrats } from '../congrats/congrats';
import { Logo } from '../../logo/logo';

type GameBoardProps = PropsFromState & PropsFromDispatch;
class GameBoard extends React.Component<GameBoardProps> {
    componentDidMount() {
        this.props.startGame();
    }

    render() {
        return (
            <div className="game-board">
                <div className="header">
                    <Logo size="small"/>
                    <ConnectedScorePanel />
                </div>
                <div className={this.containerDockClasses}>
                    <ConnectedDeck />
                </div>
                {this.getEndedCongrats()}
            </div>
        );
    }

    private getEndedCongrats() {
        return this.props.gameFinished ? <Congrats /> : null;
    }

    private get containerDockClasses() {
        return this.props.gameFinished ? 'container game-ended' : 'container';
    }
}

type PropsFromState =  Pick<GameState, 'gameFinished'>;
const mapStateToProps = (state: GameState): PropsFromState => {
    return {
        gameFinished: state.gameFinished,
    };
};

interface PropsFromDispatch {
    startGame: typeof actions.startGame;
}
const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => {
    return {
        startGame: () => dispatch(actions.startGame())
    };
};
export const ConnectedGameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoard);