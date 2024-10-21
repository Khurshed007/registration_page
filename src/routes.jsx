import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./views/SignIn/SignIn";
import Registration from "./views/Registration/Registration";
import ForgottPassword from "./views/forgottPassword/ForgottPassword";

export const RootRoutes = () => {
  return (
    <Routes>
       <Route path="/" element = {<Registration/>}/>
       <Route path="sign-in" element = {<SignIn/>}/>
       <Route path="forgott-password" element = {<ForgottPassword/>}></Route>
      {/* <Route path="/" element = {<Registration/>}/> */}
      {/* <Route path="/" element={<Layout />}>
        <Route index element={<Main />} /> // НАШ ПЕРВЫЙ Эл в Outlet
        <Route path="categories/*" element={<Categories />} />
        <Route path="all-sales/*" element={<AllSalesRoute />} />
        <Route path="all-products/*" element={<AllProductsRoute />} />
        <Route path="liked-products/*" element={<LikedProductsRoute />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="cart" element={<CartContent />} />
        <Route path="*" element={<NotFound />} />
      </Route> */}
    </Routes>
  );
};
