import Login from "../pages/Login";
import Home from "../pages/Home";
import React from "react";
import ProductDetails from "../pages/ProductDetails";
import { Route,Routes } from "react-router-dom";
 export default function AllRoutes(){
    return(
        <>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/product/details" element={<ProductDetails/>}/>
</Routes>
        </>
    )
}