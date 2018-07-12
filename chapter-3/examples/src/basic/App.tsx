import * as React from 'react';

interface AppProps {
    name: string;
}

// Stateless Functional Component
export const App: React.SFC<AppProps> = ({ name }) => (<h1>Hello {name}</h1>);

// Class component
export class AppComponent extends React.Component<AppProps> {
    render() {
        return (<h1>Hello {this.props.name}</h1>);
    }
}