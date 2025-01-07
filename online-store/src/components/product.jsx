import './styles/product.css';
import './quantityPicker';
import QuantityPicker from './quantityPicker';

function Product(props) {
    return (
        <div className='productContainer'>
            <img className='productImg' src='https://picsum.photos/250' alt='loremPhoto' />
            <h3>{props.data.title}</h3>

            <label>$99.99</label>
            <label>${props.data.price}</label>

            <QuantityPicker></QuantityPicker>
        </div>
    )
}

export default Product;