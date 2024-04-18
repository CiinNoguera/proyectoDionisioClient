import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/css/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from './router/index.js';
import { RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='contenedor'>
      <RouterProvider router={router}/>
    </div>
    
  </React.StrictMode>
);

