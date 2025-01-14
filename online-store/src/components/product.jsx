import './styles/product.css';
import './quantityPicker';
import QuantityPicker from './quantityPicker';
import { useContext } from 'react';
import GlobalContext from '../state/globalContext';




function Product(props) {

    const globalAdd = useContext(GlobalContext).addProductToCart;

    function onAdd() {
        console.log('item added');
        globalAdd(props.data);
    }

    return (
        <div className='productContainer'>
            <img className='productImg' src='https://picsum.photos/250' alt='loremPhoto' />
            <h3>{props.data.title}</h3>

            <div className='priceContainer'>
                <label>$99.99</label>
                <label>${props.data.price.toFixed(2)}</label>
            </div>

            <div className='cartContainer'>
                <QuantityPicker></QuantityPicker>
                <button className='addBtn btn btn-primary btn-sm' onClick={onAdd}>Add</button>
            </div>
        </div>
    )
}

export default Product;