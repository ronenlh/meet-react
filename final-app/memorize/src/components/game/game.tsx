import * as React from 'react';
import { Link } from 'react-router-dom';
import { ConnectedGameBoard } from './game-board/game-board';
import { connect } from 'react-redux';
import { ConnectedCongrats } from './congrats/congrats';
import { GameState } from '../../store/game/initial-state';
import './game.css';

class Game extends React.Component<PropsFromState> {
    render() {
        return (
            <div>
                <div className={this.gameClasses}>
                    <Link to="/"><i className="button-link">Back</i></Link>
                    <ConnectedGameBoard />
                </div>
                {this.getEndedCongrats()}
            </div>

        );
    }

    private getEndedCongrats() {
        return this.props.gameEnded ? <ConnectedCongrats /> : null;
    }

    private get gameClasses() {
        return this.props.gameEnded ? 'game ended' : 'game';
    }
}

type PropsFromState =  Pick<GameState, 'gameEnded'>;
const mapStateToProps = (state: GameState): PropsFromState => {
    return {
        gameEnded: state.gameEnded,
    };
};

export const ConnectedGame = connect(mapStateToProps)(Game);