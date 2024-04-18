import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error404 from "../pages/Error404";

export const router = createBrowserRouter( [
    {
        path: '/',
        element:<Home/>,
        errorElement:<Error404/>
    },
    {
        path:'/Login',
        element:<Login/>,
        errorElement:<Error404/>
    },
    {
        path:'/Register',
        element: <Register/>,
        errorElement:<Error404/>
    }
]);