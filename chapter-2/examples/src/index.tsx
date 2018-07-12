import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { App, AppComponent } from './basic/App';
// import { LifecycleParent } from './lifecycle/LifecycleParent';
import { CompositionExample } from './composition/Composition';


ReactDOM.render(
  <CompositionExample />,
  document.getElementById('root') as HTMLElement
);
