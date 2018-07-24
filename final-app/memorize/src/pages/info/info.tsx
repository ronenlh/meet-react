import * as React from 'react';
import { Link } from 'react-router-dom';

export class Info extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">back</Link>
                <h1>Memorize!</h1>
                <div>creadits and info goes here...</div>
            </div>
        );
    }
}