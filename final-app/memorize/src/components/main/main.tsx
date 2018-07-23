import * as React from 'react';
import './main.css';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { GameState } from '../../store/game/initial-state';
import * as actions from '../../store/game/actions';

type MainProps = PropsFromDispatch;

export class Main extends React.Component<MainProps> {
    startGame() {
        this.props.startGame();
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.startGame}>START</button>
            </div>
        );
    }
}

interface PropsFromDispatch {
    startGame: typeof actions.startGame;
}

const mapStateToProps = (state: GameState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    startGame: () => dispatch(actions.startGame())
});

export const connectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);