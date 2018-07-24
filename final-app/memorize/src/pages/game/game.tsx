import * as React from 'react';
import { Link } from 'react-router-dom';
import { ConnectedGameBoard } from '../../components/game-board/game-board';

export class Game extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">back</Link>
                <ConnectedGameBoard />
            </div>
        );
    }
}