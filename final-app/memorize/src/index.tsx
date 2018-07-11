import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { GameBoard } from './components/game-board/game-board';

ReactDOM.render(
  <GameBoard />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();