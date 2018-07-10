import * as React from 'react';
import { CardProps } from './card.props';
import './card.css';

export const Card = ({type, onClick}: CardProps) =>
                            (<i className="card show" onClick={() => onClick()}>{type}</i>);