import * as React from 'react';
import { Link } from 'react-router-dom';

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Memorize!</h1>
                <Link to="/game">click here to start playing</Link>
                <Link to="/info">more info</Link>
            </div>
        );
    }
}