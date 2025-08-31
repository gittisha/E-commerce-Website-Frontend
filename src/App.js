import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory.jsx';
import Login from './pages/Login.jsx';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';

import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';

// ADD THIS
import ShopContextProvider from './context/ShopContext.jsx';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route 
            path="/womens" 
            element={<ShopCategory banner={women_banner} category="women" />} 
          />
          <Route 
            path="/mens" 
            element={<ShopCategory banner={men_banner} category="men" />} 
          />
          <Route 
            path="/kids" 
            element={<ShopCategory banner={kid_banner} category="kid" />} 
          />
          <Route 
            path="/product/:productId" 
            element={<Product />} 
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
