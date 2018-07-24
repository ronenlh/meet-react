import {startGameMiddleware} from './start-game';
import { selectCardMiddleware } from './select-card';

export const gameMiddlewares = [startGameMiddleware, selectCardMiddleware];