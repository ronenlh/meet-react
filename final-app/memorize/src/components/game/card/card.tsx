import * as React from 'react';
import { CardProps } from './card.props';
import './card.css';

export class Card extends React.Component<CardProps> {
    constructor(props: CardProps) {
        super(props);
        this.selectCard = this.selectCard.bind(this);
    }

    render() {
        return (
            <i className={this.cardClasses} onClick={this.selectCard}>
                {this.props.value}
            </i>
        );
    }

    private get cardClasses() {
        let className = 'card';
        if (this.props.isOpen) {
            className += ' open show disabled';
        }
        if (this.props.isMatched) {
            className += ' match';
        }
        if (this.props.disabled) {
            className += ' disabled';
        }
        return className;
    }

    private selectCard() {
        if (this.props.isMatched || this.props.disabled) {
            return;
        }
        this.props.onClick();
    }
}