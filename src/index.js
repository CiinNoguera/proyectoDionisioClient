import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/css/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from './router/index.js';
import { RouterProvider } from 'react-router-dom';
import UserProvider from './context/UserContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   
     <div className='contenedor'>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
     </div>
  </>
);

