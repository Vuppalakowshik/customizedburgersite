import React from "react";
import  { useState } from "react";
import { useCart } from "../Cardcontext/Cardcontext.js"; // import context
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
import { BurgerCustomizer } from "../BurgerCustomizer/burgercustom.js";
import Dips from "../../../Assets/images/dips.jpg";
import { BannerComponent } from "../Banner/Banner.js";
import ReactDOM from "react-dom/client";
import App from "../../../App.js";
import { CartProvider } from "../Cardcontext/Cardcontext.js";
import { CartContext } from "../Cardcontext/Cardcontext.js"; // ✅ Use the actual context, not the provider
import { useContext } from "react";

const {Meta} = Card;
const { Search } = Input;

const burgerItems = [
  
  {
    id:'1',
    name: 'Classic Veg Burger',
    img: Vegburger,
    desc: 'A simple yet delicious burger with a crispy vegetable patty...',
    price: 120,
  },
  {
    id:'2',
    name: 'Paneer Tikka Burger',
    img: Paneertikka,
    desc: 'An Indian-inspired burger featuring spicy grilled paneer...',
    price: 130,
  },
  {
    id:'3',
    name: 'Mushroom Swiss Burger',
    img: Mushroom,
    desc: 'A creamy, rich burger made with sautéed mushrooms...',
    price: 140,
  },
  // Add more burger items here
  {
    id:'4',
    name: 'Aloo Tikki Burger',
    img: Alootikki,
    desc: 'A popular Indian street food burger with a spiced potato patty...',
    price: 110,
  },
  {
    id:'5',
    name: 'Falafel Burger',
    img: Falfel,
    desc: 'A Middle-Eastern inspired burger made with chickpea patties...',
    price: 125,
  },
  {
    id:'6',
    name: 'Cheese Burst Burger',
    img: Cheeseburst,
    desc: 'A cheesy delight with gooey cheese bursting from the patty...',
    price: 150,
  },
  {
    id:'7',
    name: 'Mexican Bean Burger',
    img: Mexicanburger,
    desc: 'A spicy and flavorful burger made with black beans and spices...',
    price: 135,
  },
  {
    id:'8',
    name: 'Corn and Spinach Burger',
    img: Cornandspinach,
    desc: 'A healthy burger packed with corn, spinach, and spices...',
    price: 120,
  },
  {
    id:'9',
    name: 'Tofu Teriyaki Burger',
    img: Tofuburger,
    desc: 'A delicious burger made with marinated tofu and teriyaki sauce...',
    price: 145,
  },
  {
    id:'10',
    name: 'Jackfruit Pulled Burger',
    img: Jackfruit,
    desc: 'A vegan burger made with pulled jackfruit and BBQ sauce...',
    price: 160,
  },
];
 
const Nonvegburger =[
  { name: "Classic Chicken Burger", img: ChickenBurger,price: 120 ,id:11},
  { name: "Spicy Peri-Peri Chicken Burger", img: Spicyperperi,price: 120,id:12},
  { name: "Cheesy Chicken Burger", img: chickencheesy,price: 120,id:13},
  { name: "Buffalo Chicken Burger", img: buffalochicken ,price: 120,id:14},
  { name: "BBQ Pulled Chicken Burger", img: BBQpulled ,price: 120,id:15},
  { name: "Crunchy Fried Chicken Burger", img: cunchyfried ,price: 120,id:16},
  { name: "Double Beef Burger", img: doublebeef ,price: 120,id:17},
  { name: "Lamb & Mint Burger", img: lambandmint ,price: 120,id:18},
  { name: "Fish Fillet Burger", img: fishfillet ,price: 120,id:19},
  { name: "Prawn Tempura Burger", img: prawntemp ,price: 120,id:20},

];






export const Homepage = () => {
  const newLocal = "customburger";
   const [searchQuery, setSearchQuery] = useState('');
 
  const navigate = useNavigate();
  const context = useContext(CartContext); 
   

  const getTotalCount = () => {
    const cartItems = context?.cartItems || [];
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const { cartItems, setCartItems } = useContext(CartContext); 
  const [addedItems, setAddedItems] = useState({}); 
  
    const addToCart = (item) => {
      const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
      if (existingItemIndex !== -1) {
        const updatedCart = [...cartItems];
        updatedCart[existingItemIndex].quantity += 1;
        setCartItems(updatedCart);
      } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
      setAddedItems(prev => ({ ...prev, [item.id]: true }));
    };

  const getItemQuantity = (itemName) => {
    const found = cartItems.find(cartItem => cartItem.name === itemName);
    return found ? found.quantity : 0;
  };
  const isItemAdded = (itemId) => addedItems[itemId];


const handleCustomize = () => {
  navigate('/customizeburger');
};
const filteredBurgers = burgerItems.filter((item) =>
  item.name.toLowerCase().includes(searchQuery.toLowerCase())
).map(item => ({
  ...item,
  highlight: searchQuery.length > 0
}));



  return (
    <div className="Homepage">
  
    <BannerComponent/>
    <div style={{ textAlign: 'center', margin: '20px' }}>
        <Search
          placeholder="Search for a burger..."
          allowClear
          enterButton="Search"  
          size="large"
          onSearch={() => {}} // No need to do anything on explicit search

          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
  <div>
    <h1 style={{fontFamily: "sans-serif", fontWeight:"600", marginLeft: "20px"}}>What are you Craving For ?</h1>
  </div>

<div className="row">
<div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
{filteredBurgers.map((item, index) => (
  <Card
    key={index}
    hoverable
    style={{
      width: 300,
      margin: 16,
      border: item.highlight ? '3px solid rgb(255, 87, 51)' : '1px solid #f0f0f0',
      boxShadow: item.highlight
        ? '0 0 10px rgba(255, 87, 51, 0.6)'
        : 'none',
      transition: 'all 0.3s',
    }}
    cover={
      <img
        alt={item.name}
        src={item.img}
        style={{ height: 200, objectFit: 'cover' }}
      />
    }
    actions={[
      <div
        className="customizebutton"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
        }}
      >
         <Button
                onClick={() => addToCart(item)} // Add to cart logic
                disabled={isItemAdded(item.id)} // Disable button if item is already in the cart
                style={{ backgroundColor: isItemAdded(item.id) ? 'gray' : '#FF5733', color: 'white' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <ShoppingCartOutlined />
                  <h4 style={{ margin: 0 }}>
                    {isItemAdded(item.id) ? 'Added to Cart' : 'Add to Cart'}
                  </h4>
                </div>
              </Button>

        <Button
          onClick={() => navigate('/customizeburger')}
          style={{
            backgroundColor: '#FF5733',
            color: 'white',
            border: 'none',
            padding: '6px 16px',
            borderRadius: '5px',
          }}
        >
          Customize
        </Button>
      </div>,
    ]}
  >
    <Meta title={item.name} description={item.desc} />
  </Card>
))}
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

  );
};
