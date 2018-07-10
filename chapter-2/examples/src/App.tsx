import * as React from 'react';

interface AppProps {
    name: string;
}

// Stateless Functional Component
export const App: React.SFC<AppProps> = ({ name }) => (<h1>Hello {name}</h1>);
