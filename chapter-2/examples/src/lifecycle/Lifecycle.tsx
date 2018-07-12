import * as React from 'react';

export interface LifecycleProps {
    name: string;
}

class LifecycleState {
    value: string = '0.00';
}

export class Lifecycle extends React.Component<LifecycleProps, LifecycleState> {
    constructor(props: LifecycleProps){
        super(props);
        console.log('%c Lifecycle::constructor', 'background: #222; color: #bada55');
        this.state = new LifecycleState();
    }
    static getDerivedStateFromProps(){
        console.log('%c Lifecycle::getDerivedStateFromProps', 'background: #222; color: #7aadff');
        return null;
    }
    
    shouldComponentUpdate(){
        console.log('%c Lifecycle::shouldComponentUpdate', 'background: #222; color: #ffffff');
        return true;
    }

    render() { 
        console.log('%c Lifecycle::render', 'background: #222; color: #a479ff');
        return (
        <div style={{border: 'solid 1px #333'}}>
            <h1>Lifecycle component</h1>
            <h4>props: {JSON.stringify(this.props)}</h4>
            <h4>state: {JSON.stringify(this.state)}</h4>
            <button type="button" onClick={
                () => this.setState({value: Math.random().toFixed(2)})
            }>Update internal state</button>
        </div>)
    }
    

    getSnapshotBeforeUpdate(){
        console.log('%c Lifecycle::getSnapshotBeforeUpdate', 'background: #222; color: #f379ff');
        return null;
    }
    
    componentDidMount(){
        console.log('%c Lifecycle::componentDidMount', 'background: #222; color: #ff5661');
    }

    componentDidUpdate(){
        console.log('%c Lifecycle::componentDidUpdate', 'background: #222; color: #a5ffc2');
    }

    componentWillUnmount(){
        console.log('%c Lifecycle::componentWillUnmount', 'background: #222; color: #92f2f2');
    }
}