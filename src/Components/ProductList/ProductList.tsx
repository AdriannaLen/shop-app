import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <h1>Product List</h1>
      <ul className='product-list-container'>
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
