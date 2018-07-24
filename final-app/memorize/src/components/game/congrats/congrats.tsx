import * as React from 'react';
import './congrats.css';
import { Link } from 'react-router-dom';

export const Congrats: React.SFC = () => (
    <div className="overlay">
        <div className="congrats">
            <h1>Congrats!🎉🎉🎉</h1>
            <Link to="/">Play again!</Link>
        </div>
    </div>
);