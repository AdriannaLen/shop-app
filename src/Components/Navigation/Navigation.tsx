
// import { useState } from'react' 
import shoppingCartIcon from '../../assets/shopping_cart_icon.png';
import heartIcon from '../../assets/heart_icon.png';
import './Navigation.scss'


const Navigation = () => {

    // below is for hamburger menu
    // const [isActive, setIsActive] = useState(false);

    // const handleClick = () => {
    //     setIsActive(!isActive);
    // };

    return (

        <>
        {/* <nav className={`site__nav ${isActive ? 'site__nav--active' : ''}`}>
        <button className="hamburger" onClick={handleClick}>
            <span className={`hamburger__box ${isActive ? 'hamburger__box--active' : ''}`}>
                <span className="hamburger__inner"></span>
            </span>
        </button>
        <div className={`navigation ${isActive ? 'navigation--active' : ''}`}> */}
        <nav className="navigation">
            
            <ul className="navigation__list">
                <li className="navigation__item"><a href="/main">Main</a></li>
                <li className="navigation__item"><a href="/shop">Shop</a>
                <ul className="sub__menu">
                <li><a href="/shop/category1">New in</a></li>
                <li><a href="/shop/category2">All Products</a></li>
            {/* Dodaj więcej elementów podlisty według potrzeb */}
                 </ul></li>
                <li className="navigation__item"><a href="/cart"><img src={shoppingCartIcon}/></a></li>
                <li className="navigation__item"><a href="/favorites"><img src={heartIcon} /></a></li>
            </ul>
    
        </nav>
    </>
        
        
    )
}

export default Navigation;