import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header"; 
import Navigation from "../Components/Navigation/Navigation";
import ControlledCarousel from "../Components/ControlledCarouselCarousel/ControlledCarousel";
import Search from "../Components/Search/Search";


const Main =() => {
  return (
    <>
      <Navigation />
      <Search />
      <Header> Shop in Style </Header>
      <ControlledCarousel />
      <Footer />
    
    </>
  );
}

export default Main;