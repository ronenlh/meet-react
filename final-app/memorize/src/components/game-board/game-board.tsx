
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/game/actions';
import { ConnectedDeck } from '../deck/deck';
import { ConnectedScorePanel } from '../score-panel/score-panel';
import './game-board.css';

type GameBoardProps = PropsFromDispatch;
class GameBoard extends React.Component<GameBoardProps> {
    componentDidMount() {
        this.props.startGame();
    }

    render() {
        return (
            <div>
                <ConnectedScorePanel />
                <div className="container">
                    <ConnectedDeck />
                </div>
            </div>
        );
    }
}

interface PropsFromDispatch {
    startGame: typeof actions.startGame;
}
const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => {
    return {
        startGame: () => dispatch(actions.startGame())
    };
};
export const ConnectedGameBoard = connect(null, mapDispatchToProps)(GameBoard);