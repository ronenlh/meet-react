import * as React from 'react';

export class ComponentC extends React.Component {
    render() {
        return (
            <div style={{border: '3px dotted #399'}}>
                <h3>Component C</h3>
                {this.props.children}
            </div>
        )
    }
}
