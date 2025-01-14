import "./styles/catalog.css";
import Product from '../components/product.jsx';
import { useState } from 'react';

const dummyData = [
    {
        "title": "1",
        "category": "",
        "price": 12.99,
        "image": "https://picsum.photos/200",
        "_id": "1"
    },
    {
        "title": "2",
        "category": "",
        "price": 13.123,
        "image": "https://picsum.photos/200",
        "_id": "2"
    },
    {
        "title": "3",
        "category": "",
        "price": 14.456,
        "image": "https://picsum.photos/200",
        "_id": "3"
    },
    {
        "title": "4",
        "category": "",
        "price": 15.789,
        "image": "https://picsum.photos/200",
        "_id": "4"
    },
    {
        "title": "1",
        "category": "",
        "price": 16.123,
        "image": "https://picsum.photos/200",
        "_id": "1"
    },
    {
        "title": "2",
        "category": "",
        "price": 17.456,
        "image": "https://picsum.photos/200",
        "_id": "2"
    },
    {
        "title": "3",
        "category": "",
        "price": 18.789,
        "image": "https://picsum.photos/200",
        "_id": "3"
    },
    {
        "title": "4",
        "category": "",
        "price": 19.159,
        "image": "https://picsum.photos/200",
        "_id": "4"
    }
];

const dummCategories = ['Fruit', 'Vegetables', 'Poultry', 'Beverages', 'Beef'];

function Catalog() {
    const [allProducts, setAllProducts] = useState(dummyData);

    return (
        <div className="catalog">
            <h1>Check out our amazing catalog!</h1>

            <div className="filter">
                {dummCategories.map((cat) => 
                <button type="button" className="btn btn-info cat-btn">{cat}</button>
                )}
            </div>

            {
                allProducts.map( (prod) => <Product data={prod}></Product>)
            }

        </div>
    )
}

export default Catalog;