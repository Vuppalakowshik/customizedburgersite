import React, { useState } from "react";
import { Modal, Button, Checkbox, Divider ,Card} from "antd";
import Avacado from "../../../../src/Assets/images/toppins/avacadoslices.jpeg";
import Bellpepper from "../../../../src/Assets/images/toppins/bellpepper.png";
import Cheeseslice from "../../../../src/Assets/images/toppins/cheeseslicesveg.jpg";
import Grilledmushroom from "../../../../src/Assets/images/toppins/grilled-mushrooms-5.jpg";
import Lettuce from "../../../../src/Assets/images/toppins/Lettuce.webp";
import Olives from "../../../../src/Assets/images/toppins/olives.jpg";
import Oninionrings from "../../../Assets/images/toppins/Onion-Rings-Recipe-5.jpg";
import Paneercubes from "../../../Assets/images/toppins/paneercubes.jpg";
import Pickles from "../../../Assets/images/toppins/pickles.avif";
import Spinach from "../../../Assets/images/toppins/spinac leaves.webp";
import Sweetcorn from "../../../Assets/images/toppins/sweetcorn.jpg";
import Tomatoes from "../../../Assets/images/toppins/tomatoes.jpeg";
import  Sausage from "../../../Assets/images/Nonvegtoppins/air-fryer-chicken-sausage-12-12-2.jpg";
import Bacon from "../../../Assets/images/Nonvegtoppins/Bacon bits.jpeg";
import BBqpulled from "../../../Assets/images/Nonvegtoppins/BBq pulled chicken.jpeg";
import Beefstrips from "../../../Assets/images/Nonvegtoppins/beefstrips.jpeg";
import Chickencrumble from "../../../Assets/images/Nonvegtoppins/chciken crumbles.jpeg";
import Eggfry  from "../../../Assets/images/Nonvegtoppins/EggFry_Step8.jpg";
import Prawn from "../../../Assets/images/Nonvegtoppins/prawn-tempura-04.jpg";
import Grilledchicken from "../../../Assets/images/Nonvegtoppins/grilledchicken.jpeg";
import Tunaflakes from "../../../Assets/images/Nonvegtoppins/Tunaflakes.jpeg";
import BBQSAUCE from "../../../Assets/images/Dips/BBQ saucce.jpeg";
import Chipotle from "../../../Assets/images/Dips/chipotle-sauce-1.jpg";
import Garlic from "../../../Assets/images/Dips//garlic-aioli-recipe-FINAL-5.jpg";
import  RANCH from "../../../Assets/images/Dips/Homemade-Ranch-Dressing-Recipe-1200.jpg";
import BUFFALOEsauce from "../../../Assets/images/Dips/homemadebuffalosauce.jpg";
import KETCHUP from "../../../Assets/images/Dips/Tomato ketchup.jpeg";
import Honeymustard from "../../../Assets/images/Dips/Homey mustard.jpeg";
import HUMMUS from "../../../Assets/images/Dips/Hummus.jpg";
import MAYO from "../../../Assets/images/Dips/Mayonnaise-Recipe-main-1-1.webp";
import JALAPENJO from "../../../Assets/images/Dips/jalapenocheesesauce.jpg";
import MAYONNAISE from "../../../Assets/images/Dips/Mayonnaise-Recipe-main-1-1.webp";
import MINTCHUTNEY from "../../../Assets/images/Dips/mint chutney.jpeg";
import NACHOCHEESE from "../../../Assets/images/Dips/nacho-cheese-recipe-7.jpg";
import PERIPERI from "../../../Assets/images/Dips/Peri-Peri-Sauce_IG-3.webp";
import SOURCREAM from "../../../Assets/images/Dips/Sour-Cream-and-Chive-Dip-4.jpg";
import TOMATO from "../../../Assets/images/Dips/Tomato ketchup.jpeg";
import wasabi from "../../../Assets/images/Dips/wasabi-mayo-6.jpg";
import MANGO from "../../../Assets/images/Dips/Mango-Habanero-BBQ-Sauce-Recipe1.jpg";
import { useCart } from "../../Webcomponents/Cardcontext/Cardcontext";

import "./burgerstyle.css";
import { BannerComponent } from "../Banner/Banner";
import { specialChars } from "@testing-library/user-event";


const burgerItems = [
  { name: "Avacado", img: Avacado ,price:30},
  { name: "bellpepper", img: Bellpepper,price:30 },
  { name: "Cheeseslice  ", img: Cheeseslice ,price:30},
  { name: "Grill Mushroom  ", img: Grilledmushroom ,price:30},
  { name: "Lettuce   ", img: Lettuce ,price:30},
  { name: "   Olives", img: Olives ,price:30},
  { name: "  Onion rings", img: Oninionrings,price:30 },
  { name: "   Panneer cubes", img: Paneercubes ,price:30},
  { name: " Pickles", img: Pickles ,price:30},
  { name: "  Spinach", img: Spinach,price:30},
  {name: "Sweetcorn",img: Sweetcorn,price:30},
  {name: "Tomatoes",img: Tomatoes,price:30},
];
const Nonvegtoppins = [
  {name: "chicken Sausage",img: Sausage,price:30},
  {name: "Bacon bits ", img: Bacon,price:30},
  {name: "BBq pulled chicken",img: BBqpulled,price:30},
  {name: "Beef strip",img: Beefstrips,price:30},
  {name: "Chicken crumbles",img: Chickencrumble,price:30},
  {name: "Egg Fry",img: Eggfry,price:30},
  {name: "Grilled chicken",img: Grilledchicken,price:30},
  {name: "Prawn tempura ",img: Prawn,price:30},
  {name: "Tuna flakes", img: Tunaflakes,price:30},

];
const ClassicSauces = [
  { name: "BBQ SAUCE", img: BBQSAUCE ,price:30},
  
  { name: "Honey mustard", img: Honeymustard ,price:30},
 
  { name: "Mayo", img: MAYO ,price:30},
  
  { name: "Tomato ketchup ", img: TOMATO,price:30 },
,
];

const SPicysauces = [
  { name: "PERIPERI SAUCE", img: PERIPERI ,price:30},
  { name: "Spicy Chipotle Sauce", img: Chipotle ,price:30},
  { name: "Jalapeño Cheese Sauce", img: JALAPENJO ,price:30},
  { name: "Buffalo Sauce", img: BUFFALOEsauce ,price:30},

];

const CreamySauces = [
  { name: "Garlic Aioli", img: Garlic ,price:30},
  { name: "Ranch Dressing", img: RANCH ,price:30},
  { name: "Sour Cream", img: SOURCREAM ,price:30},
  { name: "cheese sauce", img: NACHOCHEESE ,price:30},
];
 const  SpecialSauces = [
  { name: "Mint Chutney", img: MINTCHUTNEY ,price:30},
  { name: "Hummus", img: HUMMUS ,price:30},
  { name: "Wasabi mayo", img: wasabi ,price:30},
  { name: "Mango habanero", img: MANGO ,price:30},
 ];




export const BurgerCustomizer = () => {

  const { cartItems, setCartItems } = useCart();

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const getItemQuantity = (itemName) => {
    const found = cartItems.find(cartItem => cartItem.name === itemName);
    return found ? found.quantity : 0;
  };
  return (
    <div>
         <BannerComponent/>
   
   <div>
   <div>
    <h1 style={{fontFamily: "sans-serif", fontWeight:"600", marginLeft: "20px", fontSize: "25px"}}>"Add your favorite dips and toppings to build the perfect burger for your cravings!" </h1>
  </div>
  <div className="heading-with-badge">
    <h1 style={{ fontFamily: "sans-serif", fontWeight: "600", marginLeft: "20px" }}>
 Veg toppings
    </h1>
    <div className="container">
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>
  </div>
</div>
<div className="circle-card-container">
  {burgerItems.map((item, index) => (
    <div className="circle-card" key={index} onClick={() => addToCart(item)}>
      <img src={item.img} alt={item.name} className="circle-img" />
      <p className="circle-label">{item.name}</p>
      
      {getItemQuantity(item.name) > 0 && (
        <div className="cart-badge">{getItemQuantity(item.name)}</div>
      )}
    </div>
  ))}
</div>


      <div>
  <div className="heading-with-badge">
    <h1 style={{ fontFamily: "sans-serif", fontWeight: "600", marginLeft: "20px" }}>
    NON Veg toppings
    </h1>
    <div className=" redsquare-box">
      <span className="circle red" />
    </div>
  </div>
</div>

<div className="circle-card-container">
  {Nonvegtoppins.map((item, index) => (
    <div className="circle-card" key={index} onClick={() => addToCart(item)}>
      <img src={item.img} alt={item.name} className="circle-img" />
      <p className="circle-label">{item.name}</p>
      
      {getItemQuantity(item.name) > 0 && (
        <div className="cart-badge">{getItemQuantity(item.name)}</div>
      )}
    </div>
  ))}
</div>



<div>

  
  <div className="heading-with-badge">
    <h1 style={{ fontFamily: "sans-serif", fontWeight: "600", marginLeft: "20px" }}>
    Spicy & Tangy Sauces:
    </h1>
  </div>
</div>

      

<div className="circle-card-container">
  {SPicysauces.map((item, index) => (
    <div className="circle-card" key={index} onClick={() => addToCart(item)}>
      <img src={item.img} alt={item.name} className="circle-img" />
      <p className="circle-label">{item.name}</p>
      
      {getItemQuantity(item.name) > 0 && (
        <div className="cart-badge">{getItemQuantity(item.name)}</div>
      )}
    </div>
  ))}
</div>


      <div>
  <div className="heading-with-badge">
    <h1 style={{ fontFamily: "sans-serif", fontWeight: "600", marginLeft: "20px" }}>
 Classic Sauces
    </h1>
  </div>
</div>
<div className="circle-card-container">
  {ClassicSauces.map((item, index) => (
    <div className="circle-card" key={index} onClick={() => addToCart(item)}>
      <img src={item.img} alt={item.name} className="circle-img" />
      <p className="circle-label">{item.name}</p>
      
      {getItemQuantity(item.name) > 0 && (
        <div className="cart-badge">{getItemQuantity(item.name)}</div>
      )}
    </div>
  ))}
</div>

      <div>
  <div className="heading-with-badge">
    <h1 style={{ fontFamily: "sans-serif", fontWeight: "600", marginLeft: "20px" }}>
Creamy and cheesy Sauces
    </h1>
  </div>
</div>

<div className="circle-card-container">
  {CreamySauces.map((item, index) => (
    <div className="circle-card" key={index} onClick={() => addToCart(item)}>
      <img src={item.img} alt={item.name} className="circle-img" />
      <p className="circle-label">{item.name}</p>
      
      {getItemQuantity(item.name) > 0 && (
        <div className="cart-badge">{getItemQuantity(item.name)}</div>
      )}
    </div>
  ))}
</div>


      <div>
  <div className="heading-with-badge">
    <h1 style={{ fontFamily: "sans-serif", fontWeight: "600", marginLeft: "20px" }}>
    Special & Exotic Sauces:
    </h1>
  </div>
</div>

<div className="circle-card-container">
  {SpecialSauces.map((item, index) => (
    <div className="circle-card" key={index} onClick={() => addToCart(item)}>
      <img src={item.img} alt={item.name} className="circle-img" />
      <p className="circle-label">{item.name}</p>
      
      {getItemQuantity(item.name) > 0 && (
        <div className="cart-badge">{getItemQuantity(item.name)}</div>
      )}
    </div>
  ))}
</div>




  

    </div>
  );
};
