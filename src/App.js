import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { Homepage } from "./Home/Webcomponents/Mainpage/main.js";
import { BurgerCustomizer } from "./Home/Webcomponents/BurgerCustomizer/burgercustom.js";
import { BannerComponent } from "./Home/Webcomponents/Banner/Banner.js";
import { ViewCart } from "./Home/Webcomponents/Viewcarts/Viewcart.js" // Correct pathimport { BurgerCard } from "./Home/Webcomponents/Burgercart/burgercart.js";
import { CartProvider } from "./Home/Webcomponents/Cardcontext/Cardcontext.js"; 
import { BurgerList } from "./Home/Webcomponents/Burgerlist/burgerlist.js";
import { Nonveglist } from "./Home/Webcomponents/Nonvegburgers/nonveglist.js";
import { Navbar } from "./Home/Webcomponents/Navbar/navbar.js";
import { Signup } from "./Home/Webcomponents/Signuppage/Signuppage.js"; 
import { Login } from "./Home/Webcomponents/Loginpage/Loginpage.js";
import { BurgerCard } from "./Home/Webcomponents/Burgercart/burgercart.js";




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
