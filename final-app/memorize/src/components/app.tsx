import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Game } from './game/game';
import { Welcome } from './welcome/welcome';
import { Info } from './info/info';
import './app.css';

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path="/" component={Welcome} />
                        <Route path="/game" component={Game} />
                        <Route path="/info" component={Info} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
