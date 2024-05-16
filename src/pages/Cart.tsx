import { useState, useEffect } from 'react';
import Footer from "../Components/Footer/Footer";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import Navigation from "../Components/Navigation/Navigation";
import Header from "../Components/Header/Header";



export interface Product {
    id: number;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }


const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleDelete = (id: number) => {
    const updatedCartItems = cartItems.filter(product => product.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  return (
    <>
      <Navigation />
      <Header>Shopping Cart</Header>
      <ShoppingCart cartItems={cartItems} handleDelete={handleDelete} />
      <Footer />
    </>
  );
};

export default Cart;