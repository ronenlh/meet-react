import * as React from 'react';
import './congrats.css';
import { Link } from 'react-router-dom';
import { GameState } from '../../../store/game/initial-state';
import { connect } from 'react-redux';

const Congrats: React.FC<PropsFromState> = ({moves}) => (
    <div className="overlay">
        <div className="congrats">
            <div>🎉🎉🎉</div>
            <div className="title">You win</div>
            <div className="score">Score: {moves}</div>
            <Link to="/"><i className="button-link">Play again</i></Link>
        </div>
    </div>
);

type PropsFromState =  Pick<GameState, 'moves'>;
const mapStateToProps = (state: GameState): PropsFromState => {
    return {
        moves: state.moves,
    };
};

export const ConnectedCongrats = connect(mapStateToProps)(Congrats);