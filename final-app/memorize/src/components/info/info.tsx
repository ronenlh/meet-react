import * as React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../logo/logo';

export class Info extends React.Component {
    render() {
        return (
            <div>
                <Link to="/"><i className="button-link">Back</i></Link>
                <Logo size="small"/>
                <div>creadits and info goes here...</div>
            </div>
        );
    }
}