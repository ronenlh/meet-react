import * as React from 'react';
import { Game } from './game/game';
import './app.css';

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Game />
            </div>
        );
    }
}