import * as React from 'react';
import { GameBoard } from './game-board/game-board';
import { Congrats } from './congrats/congrats';
import './game.css';
import { GameState } from './game.state';
import { CardType } from '../../models/card-types';
import { shuffle } from '../../utils/shuffle';

export class Game extends React.Component<{}, GameState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            cards: [
                {
                  value: CardType.smilyFace,
                  id: 0,
                },
                {
                  value: CardType.rocket,
                  id: 1,
                },
                {
                  value: CardType.party,
                  id: 2,
                },
                {
                  value: CardType.beer,
                  id: 3,
                },
                {
                  value: CardType.poo,
                  id: 4,
                },
                {
                  value: CardType.frog,
                  id: 5,
                },
                {
                  value: CardType.unicorn,
                  id: 6,
                },
                {
                  value: CardType.rainbow,
                  id: 7,
                },
                {
                  value: CardType.banana,
                  id: 8,
                },
                {
                  value: CardType.pizza,
                  id: 9,
                },
                {
                  value: CardType.smilyFace,
                  id: 10,
                },
                {
                  value: CardType.rocket,
                  id: 11,
                },
                {
                  value: CardType.party,
                  id: 12,
                },
                {
                  value: CardType.beer,
                  id: 13,
                },
                {
                  value: CardType.poo,
                  id: 14,
                },
                {
                  value: CardType.frog,
                  id: 15,
                },
                {
                  value: CardType.unicorn,
                  id: 16,
                },
                {
                  value: CardType.rainbow,
                  id: 17,
                },
                {
                  value: CardType.banana,
                  id: 18,
                },
                {
                  value: CardType.pizza,
                  id: 19,
                }
              ],
            matchedCards: {},
            card1: null,
            card2: null,
            moves: 0,
            gameEnded: false,
        } as GameState;
        this.startGame = this.startGame.bind(this);
        this.selectCard = this.selectCard.bind(this);
    }
    render() {
        return (
            <div>
                <div className={this.gameClasses}>
                    <GameBoard
                        card1={this.state.card1}
                        card2={this.state.card2}
                        cards={this.state.cards}
                        matchedCards={this.state.matchedCards}
                        gameEnded={this.state.gameEnded}
                        moves={this.state.moves}
                        selectCard={this.selectCard}
                        startGame={this.startGame}
                    />
                </div>
                {this.getEndedCongrats()}
            </div>

        );
    }

    private startGame() {
        this.setState((prevState) => ({
            cards: shuffle(prevState.cards),
            moves: 0,
            gameEnded: false,
            matchedCards: {}
        }));
    }

    private selectCard(id: number) {
        const firstCardId = this.state.card1;
        if (firstCardId === null) {
            this.setState({card1: id});
            return;
        }

        const secondCardId = id;

        this.setState((prevState) => ({
            moves: prevState.moves + 1,
            card2: id,

        }));

        const firstCardType = this.state.cards.find((card) => card.id === firstCardId);
        const secondCardType = this.state.cards.find((card) => card.id === secondCardId);

        const isMatched = firstCardType && secondCardType && firstCardType.value === secondCardType.value;
        setTimeout(() => {
            if (isMatched) {
                this.setState((prevState) => ({
                    matchedCards: {
                        ...prevState.matchedCards,
                        [firstCardId]: true,
                        [secondCardId]: true,
                    }
                }), () => {
                    if ((Object.keys(this.state.matchedCards).length) === this.state.cards.length) {
                        this.setState({
                            gameEnded: true
                        });
                    }
                });
            }
            this.setState({
                card1: null,
                card2: null,
            });
        }, 1000);
    }

    private getEndedCongrats() {
        return this.state.gameEnded ? <Congrats moves={this.state.moves} /> : null;
    }

    private get gameClasses() {
        return this.state.gameEnded ? 'game ended' : 'game';
    }
}
