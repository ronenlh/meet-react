import * as React from 'react';

// As a funactional component
export const ComponentA: React.FC = ({children}) => (
    <div style={{border: '3px solid #333'}}>
        <h3>Component A</h3>
        {children}
    </div>
);

// As a class component

// export class ComponentA extends React.Component {
//     render() {
//         return (
//             <div style={{border: '3px solid #333'}}>
//                 <h3>Component A</h3>
//                 {this.props.children}
//             </div>
//         )
//     }
// }
