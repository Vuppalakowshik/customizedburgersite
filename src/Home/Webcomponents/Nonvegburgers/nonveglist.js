import React from 'react';
import { Card, Button ,Input} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { BannerComponent } from '../Banner/Banner.js';
import { useCart } from '../Cardcontext/Cardcontext.js';
import { useNavigate } from 'react-router-dom';
import  { useState } from "react";


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

const { Meta } = Card;
const { Search } = Input;


export const Nonveglist = () => {
    const navigate = useNavigate();
  const { setCartItems, cartItems } = useCart();
    const [searchQuery, setSearchQuery] = useState('');
    const [addedItems, setAddedItems] = useState({});

    const addToCart = (item) => {
      const existingItem = cartItems.find(i => i.name === item.name);
      if (existingItem) {
        const updatedCart = cartItems.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
        setCartItems(updatedCart);
      } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
      setAddedItems(prev => ({ ...prev, [item.id]: true }));
    };
    

  const burgers = [
    {
      id:"11",
      name: 'Chicken Burger',
      img: ChickenBurger,
      desc: 'A simple yet delicious burger with a crispy vegetable patty...',
      price: 120,
    },
    {
      id:"12",
      name: 'Spicy Peri Peri Chicken Burger',   
      img: Spicyperperi,
      desc: 'An Indian-inspired burger featuring spicy grilled paneer...',
      price: 130,
    },
    {
      id:"13",
      name: 'Chicken Cheesy Burger',
      img: chickencheesy,
      desc: 'A creamy, rich burger made with sautéed mushrooms...',
      price: 140,
    },
    // Add more burger items here
    {
      id:"14",
      name: 'Buffalo Chicken Burger',
      img: buffalochicken,
     
      desc: 'A popular Indian street food burger with a spiced potato patty...',
      price: 110,
    },
    {
      id:"15",
      name: 'Crunchy Fried Chicken Burger',
      img: cunchyfried,
     
      desc: 'A Middle-Eastern inspired burger made with chickpea patties...',
      price: 125,
    },
    {
      id:"16",
      name: 'BBQ Pulled Chicken Burger',
      img: BBQpulled,
    
      desc: 'A cheesy delight with gooey cheese bursting from the patty...',
      price: 150,
    },
    {
      id:"17",
      name: 'Double Beef Burger',
      img: doublebeef,
   
      desc: 'A spicy and flavorful burger made with black beans and spices...',
      price: 135,
    },
    {
      id:"18",
      name: 'Lamb and Mint Burger',
      img: lambandmint,
     
      desc: 'A healthy burger packed with corn, spinach, and spices...',
      price: 120,
    },
    {
      id:"19",
      name: 'Fish Fillet Burger',
        img: fishfillet,

      desc: 'A delicious burger made with marinated tofu and teriyaki sauce...',
      price: 145,
    },
    {
      id:"20",
      name: 'Prawen Tempura Burger',
      img: prawntemp,
      
      desc: 'A vegan burger made with pulled jackfruit and BBQ sauce...',
      price: 160,
    },
  ];
  const isItemAdded = (itemId) => addedItems[itemId];
  const filteredBurgers = burgers.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).map(item => ({
    ...item,
    highlight: searchQuery.length > 0
  }));
  
  
  return (
    <div>
      <BannerComponent />

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

      <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredBurgers.map((item, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 300, margin: 16, border: item.highlight ? '3px solid #ff4d4f' : '1px solid #f0f0f0',
              boxShadow: item.highlight ? '0 0 10px rgba(255,77,79,0.6)' : 'none',
              transition: 'all 0.3s', }}
            cover={<img alt={item.name} src={item.img} style={{ height: 200, objectFit: 'cover' }} />}
            actions={[
              <div className="customizebutton" style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
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
              onClick={() => navigate("/customizeburger")}
              style={{ backgroundColor: "#ff4d4f", color: "white" }}
                  >
                    Customize
                  </Button>

               </div>
            ]}
          >
            <Meta title={item.name} description={item.desc} />
          </Card>
        ))}
      </div>
    </div>
  );
};
