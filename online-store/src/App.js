import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Admin from './pages/admin.jsx';
import GlobalProvider from './state/globalProvider.jsx';
import Cart from './pages/cart.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App page">
          <Navbar></Navbar>

          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/catalog' element={<Catalog></Catalog>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/admin' element={<Admin></Admin>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
          </Routes>

        </div>
        <Footer></Footer>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
