import * as React from 'react';

import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';
import { ComponentC } from './ComponentC';

export class CompositionExample extends React.Component {
    render() {
        return (
            <ComponentA>
                <ComponentB>
                    <ComponentC>
                        Example text goes here...
                    </ComponentC>
                </ComponentB>
            </ComponentA>
        )
    }
}
