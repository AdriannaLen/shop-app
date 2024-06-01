import shoppingCartIcon from '../../assets/shopping_cart_icon.png';
import heartIcon from '../../assets/heart_icon.png';
import logoIcon from '../../assets/shop-logo.svg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item navigation__logo">
          <a className="navigation__logo" href="/"><img src={logoIcon} alt="shop logo" />ShopInStyle</a>
        </li>
        <li className="navigation__item"><a href="/">Main</a></li>
        <li className="navigation__item"><a href="/shop">Shop</a>
          <ul className="sub__menu">
            <li><a href="/shop/category1">New in</a></li>
            <li><a href="/shop/category2">All Products</a></li>
          </ul>
        </li>
        <li className="navigation__item">
          <a href="/cart">
          <img src={shoppingCartIcon} alt="shopping cart" />
        <span className="cart-count">0</span>
        </a>
        </li>
        <li className="navigation__item"><a href="/favorites"><img src={heartIcon} alt="favorites" /></a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
