import { mapToAppCards, shuffle, double } from '../store/game.middlewares';
import { compose } from '../utils/utils';

export type CardType = '😃' | '😍' | '😂' | '🚀' | '🎉' | '🍻' | '🐌' | '🚧' | '🙄' | '😈' | '💩' | '🤖' | '🐰' | '🐨' | '🐸' | '🐵' | '🦄' | '🌈' | '🍌' | '🍕';

const availableCards = (['😃', '🚀', '🎉', '🍻', '💩', '🐸', '🦄', '🌈', '🍌', '🍕'] as CardType[]);

export const CARDS = compose(double, shuffle, mapToAppCards)(availableCards);
