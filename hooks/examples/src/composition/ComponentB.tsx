import * as React from 'react';

export class ComponentB extends React.Component {
    render() {
        return (
            <div style={{border: '3px dashed #639'}}>
                <h3>Component B</h3>
                {this.props.children}
            </div>
        )
    }
}
