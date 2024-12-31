import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pagez/catalog';
import Product from './components/product';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Catalog></Catalog>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
