import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/design-system.css';
import './styles/loading.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { installLoadingInterceptors } from './data/loadingBus';

installLoadingInterceptors();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// React has mounted: fade the first-paint splash out
requestAnimationFrame(() => {
  const splash = document.getElementById('d4u-splash');
  if (splash) { splash.style.opacity = '0'; setTimeout(() => splash.remove(), 350); }
});

reportWebVitals();
