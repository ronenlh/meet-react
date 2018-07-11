import * as React from 'react';
import { CardProps } from './card.props';
import './card.css';

export const Card = ({type, onClick, isFlipped}: CardProps) =>
                            (<i className={getClasses(true, false)} onClick={() => onClick()}>{type}</i>);

function getClasses(isFlipped: boolean, isMatched: boolean) {
    let className = 'card';
    if (isFlipped) {
        className += ' show';
    }
    if (isMatched) {
        className += ' disabeld';
    }
    return className;
}