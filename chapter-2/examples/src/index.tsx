import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { App, AppComponent } from './basic/App';
import { LifecycleParent } from './lifecycle/LifecycleParent';

ReactDOM.render(
  <LifecycleParent />,
  document.getElementById('root') as HTMLElement
);
