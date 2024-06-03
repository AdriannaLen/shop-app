import ProductList from "../Components/ProductList/ProductList";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";   
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search"


const Shop = () => {
    return (
        <>
        <Navigation />
        <Search />
        <Header> Products </Header>
            <ProductList />
            <Footer />
           
        </>
    )
}

export default Shop;
