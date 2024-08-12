
import React, { useState } from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import StyleSection from "./Components/StyleSection/StyleSection.jsx";
import SlideShow from './Components/SlideShow/SlideShow.jsx'; 
import Flex from './Components/Flex/Flex.jsx';
import Flex2 from './Components/Flex/Flex2.jsx'; 
import Flex3 from './Components/Flex/Flex3.jsx'; 
import Flex4 from './Components/Flex/Flex4.jsx'; 
import Footer from './Components/Footer/Footer.jsx';
import './App.css';


const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Sample products
  const products = [
    {
      id: 1,
      name: 'Smartphone A',
      description: 'Description A',
      image: 'https://example.com/imageA.jpg',
    },
    {
      id: 2,
      name: 'Smartphone B',
      description: 'Description B',
      image: 'https://example.com/imageB.jpg',
    },
  ];

  return (
    <>
      <Navbar wishlist={wishlist} cart={cart} />
      
      <div className="cart-details">
        <h2></h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <StyleSection />
      <SlideShow />
      <Flex addToWishlist={addToWishlist} addToCart={addToCart} />
      <Flex2 />
      <Flex3/>
      <Flex4/>
      <Footer/>
    </>
  );
}

export default App;
