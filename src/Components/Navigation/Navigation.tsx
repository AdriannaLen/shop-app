
import './Navigation.scss'

const Navigation = () => {

    return (

        <>
        <div className="navigation">
            <ul className="navigation__list">
                <li className="navigation__list__item"><a href="#">Main</a></li>
                <li className="navigation__list__item"><a href="#">Shop</a></li>
                <li className="navigation__list__item"><a href="#">Cart</a></li>
                <li className="navigation__list__item"><a href="#">Favorites</a></li>
            </ul>
        </div>
    </>
        
        
    )
}

export default Navigation;