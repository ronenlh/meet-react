import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface AppProps {
    appName: string;
}

class AppComponent extends React.Component<AppProps> {
    render() {
        return (<h1>Hello {this.props.appName}</h1>);
    }
}

ReactDOM.render(
    <AppComponent appName="React.ts" />,
    document.getElementById('root') as HTMLElement
);