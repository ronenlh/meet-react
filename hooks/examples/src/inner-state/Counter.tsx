import * as React from 'react';

class CounterState {
    count: number = 0;
}

export class Counter extends React.Component<{}, CounterState> {
    constructor(props: {}) {
        super(props);
        this.state = new CounterState();

        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    decrement(){
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.decrement}>-</button>
                <h1>{this.state.count}</h1>
                <button type="button" onClick={this.increment}>+</button>
            </div>
        );
    }
}