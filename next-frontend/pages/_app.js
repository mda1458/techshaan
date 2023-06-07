import { useState, useEffect } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart);
  }, [cart])
  
  const addtoCart = (item, quantity) => {
    quantity = Number(quantity);
    const res = cart.find((cartItem) => cartItem.slug === item.slug);
    if (res) {
      const newCart = cart.map((cartItem) =>
        cartItem.slug === item.slug
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removefromCart = (item) => {
    if (item.quantity > 1) {
      const newCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCart(newCart);
      return;
    }
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };


  return (
    <>
      <Head>
        <title>TechShaan</title>
        <meta
          name="description"
          content="TechShaan is a blog website where you can find all the latest tech news and updates."
        />
        <meta
          name="keywords"
          content="TechShaan, Tech, Shaan, Tech News, Tech Updates, Tech Blog"
        />
        <meta name="author" content="Muhammad Danish" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar cart={cart} />
      <Component
        cart={cart}
        addtoCart={addtoCart}
        removefromCart={removefromCart}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
