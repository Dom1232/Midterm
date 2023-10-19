import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
//Removed unneeded imports that were part of the default index.js installed with react

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);