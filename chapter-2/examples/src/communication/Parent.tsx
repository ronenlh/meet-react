import * as React from 'react';
import {Child} from './Child';

export class Parent extends React.Component {
    render() {
        return (
            <Child price={34.33} onPress={() => alert('child pressed!')} />
        );
    }
}