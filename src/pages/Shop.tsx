import ProductList from "../Components/ProductList/ProductList";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";   
import Header from "../Components/Header/Header";


const Shop = () => {
    return (
        <>
        <Navigation />
        <Header> Products </Header>
            <ProductList />
            <Footer />
           
        </>
    )
}

export default Shop;
