import { Product } from '../types';


interface ShoppingCartProps {
    cartItems: Product[];
  }
  
  const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
    return (

        <div className="container">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.title} - ${item.price}</li>
          ))}
        </ul>
      </div>
    )
}

export default ShoppingCart;