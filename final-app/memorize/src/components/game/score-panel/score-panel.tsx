import * as React from 'react';
interface Props {
    moves: number;
}

export const ScorePanel: React.SFC<Props> = ({moves}) => (
    <div>
        <div>Moves: {moves}</div>
    </div>
);