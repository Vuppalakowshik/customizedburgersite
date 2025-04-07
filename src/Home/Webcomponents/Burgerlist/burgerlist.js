import React from 'react';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { BannerComponent } from '../Banner/Banner';
import { useCart } from '../Cardcontext/Cardcontext';

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

export const BurgerList = () => {
  const { setCartItems, cartItems } = useCart();

  const addToCart = (item) => {
    const updatedCart = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updatedCart);
  };

  const burgers = [
    {
      name: 'Classic Veg Burger',
      img: Vegburger,
      desc: 'A simple yet delicious burger with a crispy vegetable patty...',
      price: 120,
    },
    {
      name: 'Paneer Tikka Burger',
      img: Paneertikka,
      desc: 'An Indian-inspired burger featuring spicy grilled paneer...',
      price: 130,
    },
    {
      name: 'Mushroom Swiss Burger',
      img: Mushroom,
      desc: 'A creamy, rich burger made with sautéed mushrooms...',
      price: 140,
    },
    // Add more burger items here
    {
      name: 'Aloo Tikki Burger',
      img: Alootikki,
      desc: 'A popular Indian street food burger with a spiced potato patty...',
      price: 110,
    },
    {
      name: 'Falafel Burger',
      img: Falfel,
      desc: 'A Middle-Eastern inspired burger made with chickpea patties...',
      price: 125,
    },
    {
      name: 'Cheese Burst Burger',
      img: Cheeseburst,
      desc: 'A cheesy delight with gooey cheese bursting from the patty...',
      price: 150,
    },
    {
      name: 'Mexican Bean Burger',
      img: Mexicanburger,
      desc: 'A spicy and flavorful burger made with black beans and spices...',
      price: 135,
    },
    {
      name: 'Corn and Spinach Burger',
      img: Cornandspinach,
      desc: 'A healthy burger packed with corn, spinach, and spices...',
      price: 120,
    },
    {
      name: 'Tofu Teriyaki Burger',
      img: Tofuburger,
      desc: 'A delicious burger made with marinated tofu and teriyaki sauce...',
      price: 145,
    },
    {
      name: 'Jackfruit Pulled Burger',
      img: Jackfruit,
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
