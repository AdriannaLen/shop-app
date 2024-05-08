
import './Navigation.scss'

const Navigation = () => {

    return (

        <>
        <div className="navigation">
            <ul className="navigation__list">
                <li className="navigation__list__item"><a href="/main">Main</a></li>
                <li className="navigation__list__item"><a href="/shop">Shop</a></li>
                <li className="navigation__list__item"><a href="/cart">Cart</a></li>
                <li className="navigation__list__item"><a href="/favorites">Favorites</a></li>
            </ul>
        </div>
    </>
        
        
    )
}

export default Navigation;