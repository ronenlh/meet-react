import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <Counter title="Hello Redux" />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
