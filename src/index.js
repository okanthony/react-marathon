import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './admin/App';
import { AppProvider } from './admin/Context';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector('#app')
);
