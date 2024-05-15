import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import { useState, useEffect } from "react";
import { Product } from '../types';
import './ProductList.scss'


interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [ isLoading, setIsLoading ] = useState(false);

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

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {

    setTimeout(() => setIsLoading(false), 3000); // for the Loader component
  })


  return (
   
    <div className="container">
      { isLoading ? <Loader /> :
      <ul className='product-list-container'>
        {products.map((product) => (
          <li className='product-list-item' key={product.id}>
            <ProductCard key={product.id} product={product} />
          </li>
        ))}
      </ul> }
      </div>
    
  );
};

export default ProductList;
