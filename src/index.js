import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './componentes/Navbar';
import "../src/css/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

