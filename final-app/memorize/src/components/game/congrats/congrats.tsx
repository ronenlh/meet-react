import * as React from 'react';
import './congrats.css';
import { GameState } from '../game.state';

type CongratsProps = Pick<GameState, 'moves'>;

export const Congrats: React.SFC<CongratsProps> = ({moves}) => (
    <div className="overlay">
        <div className="congrats">
            <div>🎉🎉🎉</div>
            <div className="title">You win</div>
            <div className="score">Score: {moves}</div>
        </div>
    </div>
);