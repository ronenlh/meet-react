import * as React from 'react';
import { Link } from 'react-router-dom';
import { ConnectedGameBoard } from './game-board/game-board';

export class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <Link to="/"><i className="button-link">Back</i></Link>
                <ConnectedGameBoard />
            </div>
        );
    }
}