import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import AppRouterProvider from './routes/AppRouterProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouterProvider />
  </React.StrictMode>
);
