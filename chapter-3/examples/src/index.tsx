import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { App } from './basic/App';
// import { AppComponent as App } from './basic/App';
import { Parent as App } from './communication/Parent';
// import { CompositionExample } from './composition/Composition';
// import { Counter } from './inner-state/Counter';
// import { LifecycleParent } from './lifecycle/LifecycleParent';


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
