import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from '../store/store';
import { Welcome } from './welcome/welcome';
import { Info } from './info/info';
import { Game } from './game/game';

export class App extends React.Component {
    render() {
        return (
            <ReduxProvider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path="/" component={Welcome} />
                        <Route path="/game" component={Game} />
                        <Route path="/info" component={Info} />
                    </Switch>
                </BrowserRouter>
            </ReduxProvider>
        );
    }
}