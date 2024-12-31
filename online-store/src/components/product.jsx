import './styles/product.css';
import './quantityPicker';
import QuantityPicker from './quantityPicker';

function Product() {
    return (
        <div className='productContainer'>
            <img src='https://picsum.photos/250' alt='loremPhoto' />
            <h3>This is a product</h3>

            <label>$99.99</label>
            <label>$99.99</label>

            <QuantityPicker></QuantityPicker>
        </div>
    )
}

export default Product;