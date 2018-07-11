import * as React from 'react';
import './congrats.css';

export const Congrats: React.SFC<{}> = () => (
    <div className="overlay">
        <div className="popup">
            <h2>Congratulations 🎉</h2>
            <a className="close">×</a>
            <div className="content-1">
                Congratulations you're a winner 🎉🎉
                </div>
            <div className="content-2">
                <p>You made 10 moves</p>
                <p>in 30:22</p>
                <p>Rating: </p>
            </div>
            <button>Play again 😄</button>
        </div>
    </div>
);
