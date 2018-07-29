
import * as React from 'react';
import { Deck } from '../deck/deck';
import { ScorePanel } from '../score-panel/score-panel';
import './game-board.css';
import { Logo } from '../../logo/logo';

const cards = [
    {
    id: 1,
    value: '🍕'
},
{
    id: 2,
    value: '🚀'
},
{
    id: 3,
    value: '🎉'
},
{
    id: 4,
    value: '⚡️'
},
{
    id: 5,
    value: '🍕'
},
{
    id: 6,
    value: '🚀'
},
{
    id: 7,
    value: '🎉'
},
{
    id: 8,
    value: '⚡️'
},
{
    id: 9,
    value: '🍌'
},
{
    id: 10,
    value: '🍌'
},
];

export class GameBoard extends React.Component {
    render() {
        return (
            <div className="game-board">
                <div className="header">
                    <Logo size="small"/>
                    <ScorePanel moves={32}/>
                </div>
                <div className="container">
                    <Deck cards={cards}/>
                </div>
            </div>
        );
    }
}
