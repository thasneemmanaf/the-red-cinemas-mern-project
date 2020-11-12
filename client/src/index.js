import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import './i18n/i18n';

ReactDOM.render(
  // <React.StrictMode>
  <Suspense fallback={<div>loading</div>}>
    <App />
  </Suspense>,

  // </React.StrictMode>,
  document.getElementById('root')
);
