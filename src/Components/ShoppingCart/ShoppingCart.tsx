import { Product } from '../types';
import './ShoppingCart.scss'
import { useState } from "react";
interface ShoppingCartProps {
    cartItems: Product[];
    handleDelete: (id: number) => void;
  }
  
  const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, handleDelete }) => {

    const [count, setCount] = useState(0);

    return (
    

        <div className="container">
        <ul>
          {cartItems.map((item, index) => (
            <>
            <li className="buttonList" key={index}>{item.title} - ${item.price}
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <button className="buttonList__delete" onClick={() => handleDelete(item.id)}>Delete</button>
            
            </li>
            </>
          ))}
        </ul>
      </div>
    )
}

export default ShoppingCart;