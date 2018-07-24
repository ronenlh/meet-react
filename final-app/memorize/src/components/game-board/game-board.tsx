
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/game/actions';
import { ConnectedDeck } from '../deck/deck';
import { ConnectedScorePanel } from '../score-panel/score-panel';
import './game-board.css';
import { GameState } from '../../store/game/initial-state';

type GameBoardProps = PropsFromState & PropsFromDispatch;
class GameBoard extends React.Component<GameBoardProps> {
    componentDidMount() {
        this.props.startGame();
    }

    render() {
        return (
            <div className="game-board">
                {this.getEndedCongrats()}
                <ConnectedScorePanel />
                <div className="container">
                    <ConnectedDeck />
                </div>
            </div>
        );
    }

    private getEndedCongrats() {
        if (this.props.gameFinished) {
           return null;
        }
        return (<div className="congrats">🎉🎉🎉</div>);
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