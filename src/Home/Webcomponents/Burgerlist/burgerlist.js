import React from 'react';
import { Card, Button,Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { BannerComponent } from '../Banner/Banner';
import { useCart } from '../Cardcontext/Cardcontext';
import { useNavigate } from 'react-router-dom';
import  { useState } from "react";

// Image imports
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

const { Meta } = Card;
const { Search } = Input;

export const BurgerList = () => {
  const navigate = useNavigate();
  const { setCartItems, cartItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

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
  };
  
  const burgers = [
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
                <Button onClick={() => addToCart(item)}>
                  <div className="CartContainer" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <ShoppingCartOutlined />
                    <h4 style={{ margin: 0 }}>Add to Cart</h4>
                  </div>
                </Button>
            
                <Button
              onClick={() => navigate("/customizeburger")}

                  style={{
                    backgroundColor: "#FF5733",
                    color: "white",
                    border: "none",
                    padding: "6px 16px",
                    borderRadius: "5px"
                  }}
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
