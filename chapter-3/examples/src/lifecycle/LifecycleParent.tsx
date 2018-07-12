import * as React from 'react';
import {Lifecycle} from './Lifecycle';

class LifecycleParentState {
    name: string = 'initial';
    showComponent: boolean = true;
}

export class LifecycleParent extends React.Component<{}, LifecycleParentState> {
    constructor(props: {}){
        super(props);
        this.state = new LifecycleParentState();
    }

    render() {
        return (
            <div>
                {
                    this.state.showComponent && 
                        <Lifecycle name={this.state.name} />
                }
                <input type="text" onChange={(e) => this.setState({name: e.currentTarget.value})} />
                <button type="button" onClick={() => this.setState({showComponent: false})}>unmount</button>
            </div>
        )
    }
    
}