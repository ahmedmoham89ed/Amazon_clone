import { createBrowserRouter } from "react-router";

//layouts
import Main from "../layouts/main";
import Auth from "../layouts/auth";

//pages
import Home from "../pages/home";
import Products from "../pages/products";
import SingleProduct from "../pages/singleproducts";

import Register from "../pages/register";
import Login from "../pages/login";
import { Navigate } from "react-router";

let Authenticated=true;
export const routes=createBrowserRouter([
    {
        path:"/",
        Component:Main,
        children:[
            {
                path:"",
                Component:Home
            },
            {
                path:"products",
                Component:Products
            },
            {
                path:"products/:id",
                Component:SingleProduct
            }
        ]
    },
    {
        path:"/auth",
        element:Authenticated?<Navigate to={"/"}/>:<Auth/>,
        children:[
            {
                path:"register",
                Component:Register
            },
            {
                path:"login",
                Component:Login
            }
        ]
    }
]);