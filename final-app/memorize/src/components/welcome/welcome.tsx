import * as React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../logo/logo';
import './welcome.css';

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Logo size="large"/>
                <div className="buttons">
                    <Link to="/game"><i className="button-link">Start</i></Link>
                    <Link to="/info"><i className="button-link">Info</i></Link>
                </div>
            </div>
        );
    }
}