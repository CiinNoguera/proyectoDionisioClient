import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error404 from "../pages/Error404";
import Layout from "../layout/Layout";

export const router = createBrowserRouter( [
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>,
            },
            {
                path:'/Login',
                element:<Login/>,
            },        
            {
                path:'/Register',
                element: <Register/>,     
            }
        ],
    }, 
  
]);