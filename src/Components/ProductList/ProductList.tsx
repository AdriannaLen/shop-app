import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import PopUp from '../PopUp/PopUp';
import { useState, useEffect } from "react";
import { Product } from '../types';
import './ProductList.scss';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
  handleDelete: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ cartItems, setCartItems ] = useState<Product[]>([]);
  const [ visible, setVisible ] = useState(false);

  // const handleDelete = (id: number) => {
  //   const updatedCartItems = cartItems.filter(product => product.id !== id);
  //   setCartItems(updatedCartItems);
  //   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  // };

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://shop-react-c0b01-default-rtdb.firebaseio.com/products/-NxNDxEEA4HYwG6BEhG0/products.json");
      if (!response.ok) throw new Error("Something goes wrong!");

      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error("Error fetching users:", error);
    }

    finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // useEffect(() => {

  //   setTimeout(() => setIsLoading(false), 3000); // for the Loader component
  // })

  useEffect(() => {
    fetchProducts();
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);
  
  const addToCart = (product: Product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);

  };

  return (
   
    <div className="container">
      {isLoading ? <Loader /> :
        <>
          <ul className='product-list-container'>
            {products.map((product) => (
              <li className='product-list-item' key={product.id}>
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
       
        </>
      }
      <PopUp visible={visible} />
    </div>
      
  );
};

export default ProductList;
