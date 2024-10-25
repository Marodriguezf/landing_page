import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Products from './Products';
import News from './News';
import Footer from './Footer';
import ProductList from './ProductList';
import SalesForm from './SalesForm';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para alternar la visibilidad del popup
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };


  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

 
  const clearCart = () => {
    setCart([]); 
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <HashRouter>
      <Navbar handleOrderPopup={handleOrderPopup} cartItems={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <News />
              <Footer />
              {/* Pasamos clearCart, cart y totalPrice al SalesForm */}
              <SalesForm 
                orderPopup={orderPopup} 
                setOrderPopup={setOrderPopup} 
                cart={cart} 
                totalPrice={totalPrice} 
                clearCart={clearCart} 
              />
            </>
          }
        />
        <Route
          path="/productList"
          element={
            <>
              <ProductList addToCart={addToCart} />
              <SalesForm 
                orderPopup={orderPopup} 
                setOrderPopup={setOrderPopup} 
                cart={cart} 
                totalPrice={totalPrice} 
                clearCart={clearCart} 
              />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
