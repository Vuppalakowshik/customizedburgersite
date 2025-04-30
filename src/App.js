import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
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
import{AdminLogin} from "./admin/webcomponenst/pages/AdminLogin.js";
import {Dashboard} from "./admin/webcomponenst/Dashboard/Dashboard.js";
import { ViewOrders } from './Home/Webcomponents/Viewcarts/Vieworders.js';




function App() {
  const [token, setToken] = useState(null);
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
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/vieworders" element={<ViewOrders/>}></Route>




        {/* Add more routes as needed */}

        <Route path="/adminlogin" element={<AdminLogin setAuthToken={setToken} />} />
          <Route
            path="/dashboard"
            element={
              token ? <Dashboard token={token} /> : <Navigate to="/adminlogin" />
            }
          />

      </Routes>
    </CartProvider>
  );
}

export default App;
