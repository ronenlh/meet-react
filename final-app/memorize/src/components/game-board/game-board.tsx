
import * as React from 'react';
import { Deck } from '../deck/deck';
import { CARDS } from '../../models/card-types';
import './game-board.css';

export const GameBoard = () => (
    <div className="container">
        <Deck cards={CARDS} />
    </div>
);
