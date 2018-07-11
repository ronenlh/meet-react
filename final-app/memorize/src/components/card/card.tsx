import * as React from 'react';
import { CardProps } from './card.props';
import './card.css';

export const Card = ({type, onClick, isOpen, isMatched}: CardProps) =>
                            (<i className={getClasses(isOpen, isMatched)} onClick={() => onClick()}>{type}</i>);

function getClasses(isOpen: boolean, isMatched: boolean) {
    let className = 'card';
    if (isOpen) {
        className += ' open show disabled';
    }
    if (isMatched) {
        className += ' match disabled';
    }
    return className;
}