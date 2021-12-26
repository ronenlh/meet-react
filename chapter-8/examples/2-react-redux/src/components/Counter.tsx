import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../store/actions';
import { CounterState } from '../store/initial-state';

interface InnerProps {
    title: string;
}

type CounterProps = InnerProps & PropsFromState & PropsFromDispatch;

class Counter extends React.Component<CounterProps> {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button type="button" onClick={this.props.decrement}>-</button>
                <h1>{this.props.count}</h1>
                <button type="button" onClick={this.props.increment}>+</button>
            </div>
        );
    }
}


type PropsFromState = Pick<CounterState, 'count'>;
const mapStateToProps = (state: CounterState) => ({
    count: state.count
});

interface PropsFromDispatch {
    decrement: typeof actions.decrement;
    increment: typeof actions.increment;
}
const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    decrement: () => dispatch(actions.decrement()),
    increment: () => dispatch(actions.increment()),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;