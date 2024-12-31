import { useState } from 'react';
import './styles/quantityPicker.css';

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        let value = quantity + 1;
        setQuantity(value);
        // Note: the setter is not immediate, will take some time (miliseconds)
    }
    function decrease() {
        if (quantity <= 0) {
            return;
        }

        let value = quantity - 1;
        setQuantity(value);
        
    }



    return (
        <div className='qt-picker'>
            <button disabled={quantity === 0} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;