import { Product } from '../types';
import './ShoppingCart.scss'

interface ShoppingCartProps {
    cartItems: Product[];
    handleDelete: (id: number) => void;
  }
  
  const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, handleDelete }) => {
    return (
    

        <div className="container">
        <ul>
          {cartItems.map((item, index) => (
            <>
            <li className="buttonList" key={index}>{item.title} - ${item.price}
            <button className="buttonList__delete" onClick={() => handleDelete(item.id)}>Delete</button>
            
            </li>
            </>
          ))}
        </ul>
      </div>
    )
}

export default ShoppingCart;