import React from 'react';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { BannerComponent } from '../Banner/Banner';
import { useCart } from '../Cardcontext/Cardcontext';

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

export const Nonveglist = () => {
  const { setCartItems, cartItems } = useCart();

  const addToCart = (item) => {
    const updatedCart = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updatedCart);
  };

  const burgers = [
    {
      name: 'Chicken Burger',
      img: ChickenBurger,
      desc: 'A simple yet delicious burger with a crispy vegetable patty...',
      price: 120,
    },
    {
      name: 'Spicy Peri Peri Chicken Burger',   
      img: Spicyperperi,
      desc: 'An Indian-inspired burger featuring spicy grilled paneer...',
      price: 130,
    },
    {
      name: 'Chicken Cheesy Burger',
      img: chickencheesy,
      desc: 'A creamy, rich burger made with sautéed mushrooms...',
      price: 140,
    },
    // Add more burger items here
    {
      name: 'Buffalo Chicken Burger',
      img: buffalochicken,
     
      desc: 'A popular Indian street food burger with a spiced potato patty...',
      price: 110,
    },
    {
      name: 'Crunchy Fried Chicken Burger',
      img: cunchyfried,
     
      desc: 'A Middle-Eastern inspired burger made with chickpea patties...',
      price: 125,
    },
    {
      name: 'BBQ Pulled Chicken Burger',
      img: BBQpulled,
    
      desc: 'A cheesy delight with gooey cheese bursting from the patty...',
      price: 150,
    },
    {
      name: 'Double Beef Burger',
      img: doublebeef,
   
      desc: 'A spicy and flavorful burger made with black beans and spices...',
      price: 135,
    },
    {
      name: 'Lamb and Mint Burger',
      img: lambandmint,
     
      desc: 'A healthy burger packed with corn, spinach, and spices...',
      price: 120,
    },
    {
      name: 'Fish Fillet Burger',
        img: fishfillet,

      desc: 'A delicious burger made with marinated tofu and teriyaki sauce...',
      price: 145,
    },
    {
      name: 'Prawen Tempura Burger',
      img: prawntemp,
      
      desc: 'A vegan burger made with pulled jackfruit and BBQ sauce...',
      price: 160,
    },
  ];
  
  return (
    <div>
      <BannerComponent />
      <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {burgers.map((item, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 300, margin: 16 }}
            cover={<img alt={item.name} src={item.img} style={{ height: 200, objectFit: 'cover' }} />}
            actions={[
              <div className="customizebutton">
           <Button onClick={() => addToCart(item)}>
  <div className="CartContainer">
    <ShoppingCartOutlined />
    <h2>Add to Cart</h2>
  </div>
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
