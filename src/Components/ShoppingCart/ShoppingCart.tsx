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

  return (
    <div className="container">
      <ul>
        {cartItems.map((item, index) => (
          <li className="buttonList" key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => handleDecrement(index)}>-</button>
            <p>{counts[index]}</p>
            <button onClick={() => handleIncrement(index)}>+</button>
            <button className="buttonList__delete" onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;