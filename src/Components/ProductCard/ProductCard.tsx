import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <li className='product-list-item'>
      <div className="card">
        <img className="card-img-top" src={product.thumbnail} alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
