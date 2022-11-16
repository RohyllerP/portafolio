import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Routes from "./Routes/index.js";

import './styles/index.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Routes>
        <App />
      </Routes>
  </React.StrictMode>
);

