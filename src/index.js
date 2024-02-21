import React from 'react';
import ReactDOM from 'react-dom/client';
// import RoutesConfig from './config/routes';
import App from "./App"
import { BrowserRouter } from 'react-router-dom';

// Mix Style
// import './assets/style/mixstyle.css';
// import 'react-toastify/dist/ReactToastify.css'

// Viewer
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        {/* <RoutesConfig /> */}
        <App />
      </BrowserRouter>
  </React.StrictMode>
);