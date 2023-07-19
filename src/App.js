import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Navbar  from './components/Navbar';
import Cart from './pages/cart/Cart'
import Products from './pages/products/Products';
import ShopContextProvider from './context/ShopContext';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
