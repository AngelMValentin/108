import './styles/product.css';
import './quantityPicker';
import QuantityPicker from './quantityPicker';
import { useState } from 'react';
import { useContext } from 'react';
import GlobalContext from '../state/globalContext';




function Product(props) {
    const [quantity, setQuantity] = useState(1);

    const globalAdd = useContext(GlobalContext).addProductToCart;

    function onAdd() {
        console.log('item added');
        

        let fixedProduct = {...props.data};
        fixedProduct.quantity = quantity;
        globalAdd(fixedProduct);
    }

    function handleQuantity(qty) {
        setQuantity(qty);
    }

    return (
        <div className='productContainer'>
            <img className='productImg' src='https://picsum.photos/250' alt='loremPhoto' />
            <h3>{props.data.title}</h3>

            <div className='priceContainer'>
                <label>${(props.data.price * quantity).toFixed(2) }</label>
                <label>${props.data.price.toFixed(2)}</label>
            </div>

            <div className='cartContainer'>
                <QuantityPicker onChange={handleQuantity} ></QuantityPicker>
                <button className='addBtn btn btn-primary btn-sm' onClick={onAdd}>Add</button>
            </div>
        </div>
    )
}

export default Product;