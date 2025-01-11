import './styles/product.css';
import './quantityPicker';
import QuantityPicker from './quantityPicker';

function onAdd() {
    console.log('item added');
}


function Product(props) {

    return (
        <div className='productContainer'>
            <img className='productImg' src='https://picsum.photos/250' alt='loremPhoto' />
            <h3>{props.data.title}</h3>

            <div className='priceContainer'>
                <label>$99.99</label>
                <label>${props.data.price}</label>
            </div>

            <div className='cartContainer'>
                <QuantityPicker></QuantityPicker>
                <button className='addBtn btn btn-primary btn-sm' onClick={onAdd}>Add</button>
            </div>
        </div>
    )
}

export default Product;