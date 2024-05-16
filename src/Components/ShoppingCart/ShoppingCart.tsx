import { Product } from '../types';


interface ShoppingCartProps {
    cartItems: Product[];
    handleDelete: (id: number) => void;
  }
  
  const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, handleDelete }) => {
    return (
    

        <div className="container">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <>
            <li key={index}>{item.title} - ${item.price}
            <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
            </>
          ))}
        </ul>
      </div>
    )
}

export default ShoppingCart;