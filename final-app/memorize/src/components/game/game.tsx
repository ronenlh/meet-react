import * as React from 'react';
import { GameBoard } from './game-board/game-board';
import './game.css';

export class Game extends React.Component {
    render() {
        return (
            <GameBoard />
        );
    }
}
