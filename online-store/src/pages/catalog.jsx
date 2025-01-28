import "./styles/catalog.css";
import Product from '../components/product.jsx';
import { useEffect, useState } from 'react';
import dataService from "../services/dataService.js";





function Catalog() {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    async function loadData() {
        const prods = await dataService.getProducts();
        setAllProducts(prods);

        const cats = await dataService.getCategories();
        setCategories(cats);
    }

    function handleCategory(cat) {
        console.log('cat clicked', cat);
        setSelectedCategory(cat);
    }

    useEffect(function() {
        loadData();
    }, []);

    function All() {
        setSelectedCategory('');
    }

    return (
        <div className="catalog">

            <div className="filter">
                <button onClick={All} className="btn btn-info cat-btn">All</button>
                {categories.map((cat) => 
                <button onClick={() => handleCategory(cat)} type="button" className="btn btn-info cat-btn">{cat}</button>
                )}
            </div>

            {
                allProducts.filter( (prod) => prod.category === selectedCategory || !selectedCategory ).map( prod => <Product data={prod}></Product>)
            }

        </div>
    )
}

export default Catalog;