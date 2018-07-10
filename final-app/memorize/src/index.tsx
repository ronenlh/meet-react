import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Deck } from './components/deck/deck';
import { CARDS } from './models/card-types';

ReactDOM.render(
  <Deck cards={CARDS} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
