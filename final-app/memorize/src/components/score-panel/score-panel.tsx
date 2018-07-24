import * as React from 'react';
import { connect } from 'react-redux';
import { GameState } from '../../store/game/initial-state';

type Props = PropsFromState;
const ScorePanel: React.SFC<Props> = ({moves}) => (
    <div>
        <div>Moves: {moves}</div>
    </div>
);

type PropsFromState =  Pick<GameState, 'moves'>;
const mapStateToProps = (state: GameState): PropsFromState => ({
    moves: state.moves
});

export const ConnectedScorePanel = connect(mapStateToProps)(ScorePanel);