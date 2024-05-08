
import { useState } from'react' 
import './Navigation.scss'


const Navigation = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (

        <>
        <nav className={`site__nav ${isActive ? 'site__nav--active' : ''}`}>
        <button className="hamburger" onClick={handleClick}>
            <span className={`hamburger__box ${isActive ? 'hamburger__box--active' : ''}`}>
                <span className="hamburger__inner"></span>
            </span>
        </button>
        <div className={`navigation ${isActive ? 'navigation--active' : ''}`}>
            <ul className="navigation__list">
                <li className="navigation__item"><a href="/main">Main</a></li>
                <li className="navigation__item"><a href="/shop">Shop</a></li>
                <li className="navigation__item"><a href="/cart">Cart</a></li>
                <li className="navigation__item"><a href="/favorites">Favorites</a></li>
            </ul>
        </div>
        </nav>
    </>
        
        
    )
}

export default Navigation;