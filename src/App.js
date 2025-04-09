import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { Homepage } from "./Home/Webcomponents/Mainpage/main";
import { BurgerCustomizer } from "./Home/Webcomponents/BurgerCustomizer/burgercustom";
import { BannerComponent } from "./Home/Webcomponents/Banner/Banner";
import {ViewCart} from "./Home/Webcomponents/Viewcart/Viewcart";
import { BurgerCard } from "./Home/Webcomponents/Burgercart/burgercart";
import { CartProvider } from "./Home/Webcomponents/Cardcontext/Cardcontext"; 
import { BurgerList } from "./Home/Webcomponents/Burgerlist/burgerlist";
import { Nonveglist } from "./Home/Webcomponents/Nonvegburgers/nonveglist";
import { Navbar } from "./Home/Webcomponents/Navbar/navbar";
import { Signup } from "./Home/Webcomponents/Signuppage/Signuppage"; 
import {Login } from "./Home/Webcomponents/Loginpage/Loginpage";



function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/customizeburger" element={<BurgerCustomizer />} />
        <Route path="/banner" element={<BannerComponent />} />
        <Route path="/viewcart" element={<ViewCart />} />
        <Route path="/burgercart" element={<BurgerCard />} />
        <Route path="/vegburgers" element={<BurgerList />} />
        <Route path="/nonvegburgers" element={<Nonveglist />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


        {/* Add more routes as needed */}

      </Routes>
    </CartProvider>
  );
}

export default App;
