import axios from 'axios';
import Product from '../components/product';

const dummyData = [
    {
        "title": "Apple",
        "category": "Fruit",
        "price": 12.99,
        "image": "https://picsum.photos/200",
        "_id": "1"
    },
    {
        "title": "Banana",
        "category": "Fruit",
        "price": 13.123,
        "image": "https://picsum.photos/200",
        "_id": "2"
    },
    {
        "title": "Onion",
        "category": "Vegetables",
        "price": 14.456,
        "image": "https://picsum.photos/200",
        "_id": "3"
    },
    {
        "title": "Salmon",
        "category": "Poultry",
        "price": 15.789,
        "image": "https://picsum.photos/200",
        "_id": "4"
    },
    {
        "title": "Cod",
        "category": "Poultry",
        "price": 16.123,
        "image": "https://picsum.photos/200",
        "_id": "1"
    },
    {
        "title": "Catfish",
        "category": "Poultry",
        "price": 17.456,
        "image": "https://picsum.photos/200",
        "_id": "2"
    },
    {
        "title": "Malta",
        "category": "Beverages",
        "price": 18.789,
        "image": "https://picsum.photos/200",
        "_id": "3"
    },
    {
        "title": "Club Soda",
        "category": "Beverages",
        "price": 19.159,
        "image": "https://picsum.photos/200",
        "_id": "4"
    }
];

const dummCategories = ['Fruit', 'Vegetables', 'Poultry', 'Beverages', 'Beef'];

class DataService {

    async getProducts() {

        // todo: call the server to get the prods

        let response = await axios.get('http://127.0.0.1:5000/api/products');
        return response.data;

        //return dummyData;
    }

    async saveProduct(product) {
       let response = await axios.post('http://127.0.0.1:5000/api/products', product);
       return response.data;
    }

    async getCategories() {

        let response = await axios.get('http://127.0.0.1:5000/api/categories');
        return response.data;

        //return dummCategories;
    }

}

export default new DataService();