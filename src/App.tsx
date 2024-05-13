import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import Main from './pages/Main'
import Shop from './pages/Shop'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/Footer/Footer'
import Navigation from './Components/Navigation/Navigation'

function App() {

  return (
    <>
    <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={< Shop />} />
          <Route path="/cart" element={< Cart />} />
          <Route path="/favorites" element={< Favorites />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
