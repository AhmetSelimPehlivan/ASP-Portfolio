import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextWrapper from './components/ThemeWrapper';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</ThemeContextWrapper>,
);

reportWebVitals();
