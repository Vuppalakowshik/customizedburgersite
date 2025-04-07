import React from "react";
import  { useState } from "react";
import { useCart } from "../Cardcontext/Cardcontext"; // import context
import { useNavigate } from "react-router-dom";

import { Button, Card,  Space, Input, } from "antd";
import { DownOutlined, SearchOutlined, ShoppingCartOutlined  } from "@ant-design/icons";
import "./mainp.css";


import Vegburger from "../../../Assets/images/Classicvegburger.webp";
import Paneertikka from "../../../Assets/images/pannertikka burger.jpeg";
import Mushroom from "../../../Assets/images/mushrromswiss.jpeg";
import Alootikki from "../../../Assets/images/Alootikki.jpg";
import Falfel from "../../../Assets/images/falafel-burgers-sq.jpg";
import Cheeseburst from "../../../Assets/images/Classic-Cheese-Burst-Burger.webp";
import Mexicanburger from "../../../Assets/images/Mexican bean burger.jpg";
import Cornandspinach from "../../../Assets/images/CornANdspinach.jpeg";
import Tofuburger from "../../../Assets/images/Tofuteriyaki.jpg";
import Jackfruit from "../../../Assets/images/veganpulledjackfruitburgerrecipeh1.jpg";
import   ChickenBurger from "../../../Assets/images/Classic-chicken-burger-scaled.jpg";
import  Spicyperperi from "../../../Assets/images/spicyperiperichickenburger.webp";
import chickencheesy from "../../../Assets/images/Classic-Cheese-Burst-Burger.webp";
import  buffalochicken  from "../../../Assets/images/Buffalo-Chicken-Burger-square-FS-2.jpg";
import cunchyfried from "../../../Assets/images/Crispy-fried-chicken-burgers_5.webp";
import BBQpulled from "../../../Assets/images/BBqchickenburger.jpeg";
import doublebeef from "../../../Assets/images/Double-Cheeseburger-square-FS-42.webp";
import lambandmint from "../../../Assets/images/Lambandmintburger.jpeg";
import fishfillet from "../../../Assets/images/fishfilletburger.webp";
import prawntemp from "../../../Assets/images/prawnTempuraburger.jpg"
import { BurgerCustomizer } from "../BurgerCustomizer/burgercustom";
import Dips from "../../../Assets/images/dips.jpg";
import { BannerComponent } from "../Banner/Banner";
import ReactDOM from "react-dom/client";
import App from "../../../App";
import { CartProvider } from "../Cardcontext/Cardcontext";
import { CartContext } from "../Cardcontext/Cardcontext"; // ✅ Use the actual context, not the provider
import { useContext } from "react";

const {Meta} = Card;

const burgerItems = [
  
  { name: "Classic Veg Burger", img: Vegburger },
  { name: "Paneer Tikka Burger", img: Paneertikka },
  { name: "Mushroom Swiss Burger", img: Mushroom },
  { name: "Aloo Tikki Burger", img: Alootikki },
  { name: "Falafel Burger", img: Falfel },
  { name: "Cheese Burst Burger", img: Cheeseburst },
  { name: "Mexican Bean Burger", img: Mexicanburger },
  { name: "Corn & Spinach Burger", img: Cornandspinach },
  { name: "Tofu Teriyaki Burger", img: Tofuburger },
  { name: "Vegan Jackfruit Burger", img: Jackfruit },
 
];
 
const Nonvegburger =[
  { name: "Classic Chicken Burger", img: ChickenBurger,price: 120 },
  { name: "Spicy Peri-Peri Chicken Burger", img: Spicyperperi,price: 120},
  { name: "Cheesy Chicken Burger", img: chickencheesy,price: 120},
  { name: "Buffalo Chicken Burger", img: buffalochicken ,price: 120},
  { name: "BBQ Pulled Chicken Burger", img: BBQpulled ,price: 120},
  { name: "Crunchy Fried Chicken Burger", img: cunchyfried ,price: 120},
  { name: "Double Beef Burger", img: doublebeef ,price: 120},
  { name: "Lamb & Mint Burger", img: lambandmint ,price: 120},
  { name: "Fish Fillet Burger", img: fishfillet ,price: 120},
  { name: "Prawn Tempura Burger", img: prawntemp ,price: 120},

]




export const Homepage = () => {
  const newLocal = "customburger";
 
 
  const navigate = useNavigate();
  const context = useContext(CartContext); 
   

  const getTotalCount = () => {
    const cartItems = context?.cartItems || [];
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

    const { cartItems, setCartItems } = useCart();
  
    const addToCart = (item) => {
      const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
      if (existingItemIndex !== -1) {
        const updatedCart = [...cartItems];
        updatedCart[existingItemIndex].quantity += 1;
        setCartItems(updatedCart);
      } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      };
    };

  const getItemQuantity = (itemName) => {
    const found = cartItems.find(cartItem => cartItem.name === itemName);
    return found ? found.quantity : 0;
  };



const handleCustomize = () => {
  navigate('/customizeburger');
};



  return (
    <div className="Homepage">
  
    <BannerComponent/>
  <div>
    <h1 style={{fontFamily: "sans-serif", fontWeight:"600", marginLeft: "20px"}}>What are you Craving For ?</h1>
  </div>

<div className="row">
<div className="cradssection">
  <div className="Card1">
   <Card
    hoverable
    style={{ width: "100%",height: "auto" }}
    cover={   <img src ={Vegburger} alt="Burger"style={{height: "250px",width: "100%"}}/>}
 
  >
    
  <div className="container">
   
 
    <div className="veg-badge-container">
        <span className="circle" />
  </div>
  </div>

 <div className="designtittle"><Meta title="Classtic Veg Burger" className="designtittle"  description= "A simple yet delicious burger with a crispy vegetable patty, fresh lettuce, juicy tomato slices, onions, and melted cheese, served with a soft toasted bun."  /></div> 

 <div className="customizebutton" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

  <Button 
    onClick={() => addToCart({
      name: "Classic Veg Burger",
      img: Vegburger,
      price: 120
    })} 
    style={{ width: "100%", marginBottom: "10px" }} // this ensures spacing
  >
    <div className="CartContainer" style={{ display: "flex", alignItems: "center" }}>
      <ShoppingCartOutlined />
      <h2 style={{ marginLeft: "8px", fontSize: "16px" }}>Add to Cart</h2>
    </div>
  </Button>

  <button 
    onClick={handleCustomize} 
    style={{ 
      backgroundColor: "#FF5733", 
      color: "white", 
      border: "none", 
      padding: "10px 20px", 
      borderRadius: "5px", 
      width: "100%"
    }}
  >
    Customize
  </button>
</div>


 
  </Card>
  </div>


  <div className="Card1">
   <Card
    hoverable
    style={{ width: "100%", height: "auto"}}
    cover={   <img src ={Paneertikka} alt="Burger"style={{height: "250px", width: "100%"}}/>}
  >
       <div className="container">
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>
  <div className="designtittle"> <Meta title="Paneer tikka "  className="designtittle" description="An Indian-inspired burger featuring spicy grilled paneer marinated in yogurt and spices, topped with onions and bell peppers for extra flavor."/></div>
  <div className="customizebutton" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

<Button 
  onClick={() => addToCart({
    name: "Paneer Tikka Burger",
    img: Paneertikka,
    price: 120
  })} 
  style={{ width: "100%", marginBottom: "10px" }} // this ensures spacing
>
  <div className="CartContainer" style={{ display: "flex", alignItems: "center" }}>
    <ShoppingCartOutlined />
    <h2 style={{ marginLeft: "8px", fontSize: "16px" }}>Add to Cart</h2>
  </div>
</Button>

<button 
  onClick={handleCustomize} 
  style={{ 
    backgroundColor: "#FF5733", 
    color: "white", 
    border: "none", 
    padding: "10px 20px", 
    borderRadius: "5px", 
    width: "100%"
  }}
>
  Customize
</button>
</div>



</Card>
</div>

  <div className="Card1">
   <Card
    hoverable
    style={{ width: "100%", height: "auto"}}
    cover={   <img src ={Mushroom} alt="Burger"style={{height: "250px", width: "100%"}}/>}
  >
   
   <div className="container">
    
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>
  <div className="designtittle"><Meta title=" Mushrrom Swiss Burger  "  description="A creamy, rich burger made with sautéed mushrooms and Swiss cheese, giving it a smooth, umami-packed taste."/></div>
  <div className="customizebutton" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

<Button 
  onClick={() => addToCart({
    name: "Mushroom Swiss Burger",
    img:Mushroom,
    price: 120
  })} 
  style={{ width: "100%", marginBottom: "10px" }} // this ensures spacing
>
  <div className="CartContainer" style={{ display: "flex", alignItems: "center" }}>
    <ShoppingCartOutlined />
    <h2 style={{ marginLeft: "8px", fontSize: "16px" }}>Add to Cart</h2>
  </div>
</Button>

<button 
  onClick={handleCustomize} 
  style={{ 
    backgroundColor: "#FF5733", 
    color: "white", 
    border: "none", 
    padding: "10px 20px", 
    borderRadius: "5px", 
    width: "100%"
  }}
>
  Customize
</button>
</div>
  </Card>
  </div>

  <div className="Card1">
   <Card
    hoverable
    style={{width: "100%", height: "auto"}}
    cover={   <img src ={Alootikki} alt="Burger"style={{height: "250px", width: "100%"}}/>}
  >
   
   <div className="container">
   
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>

  <div className="designtittle">
  <Meta title="Aloo Tikki Burger "  description="A Mediterranean delight! Made with a crispy chickpea falafel patty, fresh veggies, and a creamy tahini sauce. Perfect for those who love bold flavors."/> 
    </div> 
    <div className="customizebutton" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

<Button 
  onClick={() => addToCart({
    name: "Aloo Tikki Burger",
    img: Alootikki,
    price: 120
  })} 
  style={{ width: "100%", marginBottom: "10px" }} // this ensures spacing
>
  <div className="CartContainer" style={{ display: "flex", alignItems: "center" }}>
    <ShoppingCartOutlined />
    <h2 style={{ marginLeft: "8px", fontSize: "16px" }}>Add to Cart</h2>
  </div>
</Button>

<button 
  onClick={handleCustomize} 
  style={{ 
    backgroundColor: "#FF5733", 
    color: "white", 
    border: "none", 
    padding: "10px 20px", 
    borderRadius: "5px", 
    width: "100%"
  }}
>
  Customize
</button>
</div>
  </Card>
  </div>

  <div className="Card1">
   <Card
    hoverable
    style={{width: "100%", height: "auto"}}
    cover={   <img src ={Falfel} alt="Burger"style={{height: "250px", width: "100%"}}/>}
  >
   
   <div className="container">
   
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>
  
  <div className="designtittle">
  <Meta title="Falafel Burger  " description="A Mediterranean delight! Made with a crispy chickpea falafel patty, fresh veggies, and a creamy tahini sauce. Perfect for those who love bold flavors." />
  </div>
  
  <div className="customizebutton">
  <Button onClick={() => 
  addToCart({
    name: "Falafel Burger",
    img: Falfel,
    price: 120
  })}>
  <div className="CartContainer">
  <ShoppingCartOutlined />
  <h2>Add to Cart</h2>
</div>
  </Button>
  </div>
  </Card>
  </div>
  </div>

 <div className="row">
 <div className="cradssection">

  <div className="Card1">
   <Card
    hoverable
    style={{ width: "100%", height: "auto"}}
    cover={   <img src ={Cheeseburst} alt="Burger"style={{height: "250px", width: "100%"}}/>}
  >
    
    <div className="container">
    
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>
  <div className="designtittle">
  <Meta title="Cheese Burst Burger   "  description="For cheese lovers! A crunchy veg patty stuffed with gooey cheese, giving every bite a delightful cheesy explosion."/>
  </div>
  
  <div className="customizebutton">
  <Button onClick={() => 
  addToCart({
    name: "Cheese Burst Burger",
    img: Cheeseburst,
    price: 120
  })}><div className="CartContainer">
  <ShoppingCartOutlined />
  <h2>Add to Cart</h2>
</div>
    <ShoppingCartOutlined />
  </Button>
  </div>
  </Card>
  </div>

  <div className="Card1">
   <Card
    hoverable
    style={{ width: "100%", height: "auto"}}
    cover={   <img src ={Mexicanburger} alt="Burger"style={{height: "250px", width: "100%"}}/>}
  >
  
  <div className="container">
   
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>
  <div className="designtittle">
  <Meta title="Mexican Bean Burger  "  description="A spicy and tangy burger featuring a black bean patty, topped with salsa, jalapeños, and guacamole, giving it a true Mexican vibe!"></Meta> 
  </div>
  
  <div className="customizebutton">
  <Button onClick={() => 
  addToCart({
    name: "Mexican Bean Burger",
    img: Mexicanburger,
    price: 120
  })}><div className="CartContainer">
  <ShoppingCartOutlined />
  <h2>Add to Cart</h2>
</div>
    <ShoppingCartOutlined />
  </Button>
  </div>
  </Card>
  </div>

  <div className="Card1">
   <Card
    hoverable
    style={{width: "100%", height: "auto"}}
    cover={   <img src ={Cornandspinach} alt="Burger"style={{height: "250px", width: "100%"}}/>}
  >
   
   <div className="container">
 
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>
  <div className="designtittle">
  <Meta title="Corn & Spinach Burger  "  description="A healthy and creamy burger with a patty made of sweet corn, spinach, and cheese, creating a unique taste and texture."/>
  </div>
     
     <div className="customizebutton">
     <Button onClick={() => 
  addToCart({
    name: "Corn & Spinach Burger",
    img: Cornandspinach,
    price: 120
  })}><div className="CartContainer">
  <ShoppingCartOutlined />
  <h2>Add to Cart</h2>
</div>
  </Button>
  </div>
  </Card>
  </div>

  <div className="Card1">
   <Card
    hoverable
    style={{width: "100%", height: "auto"}}
    cover={   <img src ={Tofuburger} alt="Burger"style={{height: "250px", width: "100%"}}/>}
  >
    
    <div className="container">
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>
  <div className="designtittle">
  <Meta title="Tofu Teriyaki Burger   "  description="A Japanese-inspired burger featuring grilled tofu coated in teriyaki sauce, giving it a sweet and savory taste, paired with crunchy lettuce."/>
  </div>
 
  <div className="customizebutton">
  <Button onClick={() => 
  addToCart({
    name: "Tofu Teriyaki Burger",
    img: Tofuburger,
    price: 120
  })}> <div className="CartContainer">
  <ShoppingCartOutlined />
  <h2>Add to Cart</h2>
</div>
  </Button>
  </div>

  </Card>
  </div>

  <div className="Card1">
   <Card
    hoverable
    style={{width: "100%", height: "auto"}}
    cover={   <img src ={Jackfruit} alt="Burger"style={{height: "250px", width: "100%"}}/>}
  >
    
    <div className="container">
    <div className="veg-badge-container">
        <span class="circle" />
  </div>
  </div>
  <div className="designtittle">
  <Meta title="Vegan Jackfruit Burger "  description="A plant-based BBQ burger made with shredded jackfruit that mimics pulled pork, topped with coleslaw and smoky BBQ sauce."/>

  </div>
  
  <div className="customizebutton">
  <Button onClick={() => addToCart({
  name: "Vegan Jackfruit Burger",
  img: Jackfruit,

  price: 120
})}>
  <div className="CartContainer">
    <ShoppingCartOutlined />
    <h2>Add to Cart</h2>
  </div>
</Button>
  </div>

  </Card>
  </div>
  </div>
  

  </div>

  
  <div>
  <div className="heading-with-badge">
    <h1 style={{ fontFamily: "sans-serif", fontWeight: "600", marginLeft: "20px" }}>
      Non veg burgers
    </h1>
    <div className=" redsquare-box">
      <span className="circle red" />
    </div>
  </div>
</div>


  
<div className="circle-card-container">
  {Nonvegburger.map((item, index) => (
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
  
  </div>

  );
};
