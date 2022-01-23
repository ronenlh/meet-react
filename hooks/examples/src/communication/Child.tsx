import * as React from 'react';

interface ChildProps {
    price: number;
    onPress: () => void;
}

export class Child extends React.Component<ChildProps> {
    render() {
        return (
            <button type="button" onClick={this.props.onPress}>{this.props.price}</button>
        );
    }
}