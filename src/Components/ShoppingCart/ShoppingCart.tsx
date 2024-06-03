import { Product } from '../types';
import './ShoppingCart.scss';
import { useState, useEffect } from 'react';

interface ShoppingCartProps {
  cartItems: Product[];
  handleDelete: (id: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, handleDelete }) => {
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    setCounts(cartItems.map(() => 0));
  }, [cartItems]);

  const handleIncrement = (index: number) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (index: number) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
    newCounts[index] -= 1; }
    setCounts(newCounts);
  };


  const calculateTotal = () => {
    return cartItems.reduce((total, item, index) => {
      return total + item.price * counts[index];
    }, 0); // 0 to wartosc poczatkowa
  };

  return (
    <div className="container">
      <ul>
        {cartItems.map((item, index) => (
          <li className="buttonList" key={item.id}>
            <p className="price">{item.title} - ${item.price}</p>
            <button className="buttonList-buttonCounter" onClick={() => handleDecrement(index)}>-</button>
            <p className="buttonList-counts">{counts[index]}</p>
            <button className="buttonList-buttonCounter" onClick={() => handleIncrement(index)}>+</button>
           
            <button className="buttonList__delete" onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h1 className="total">Total: ${calculateTotal()}</h1>
   
    </div>
    
  );
};

export default ShoppingCart;