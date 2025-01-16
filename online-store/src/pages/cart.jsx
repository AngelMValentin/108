import GlobalContext from '../state/globalContext';
import { useContext } from 'react';
import './styles/cart.css';

function Cart() {
    const cart = useContext(GlobalContext).cart;

    return (
        <div className='cart page'>
            <h1>Ready to checkout?</h1>
            <h3> We have {cart.length} products waiting for you!</h3>

            <div className='list'>
                <ul>
                    {cart.map(prod =>
                        <li className='cart-item'>
                            <img src={prod.image} alt='pics'></img>
                            <h6>{prod.title}</h6>
                            <label>${(prod.price).toFixed(2)}</label>
                            <label>Quantity: {prod.quantity}</label>
                            <label>Total: ${(prod.price * prod.quantity).toFixed(2) }</label>
                            <button className='btn btn-sm btn-outline-danger'>Remove</button>
                        </li>
                        
                        )}
                        <button type="button" class="btn btn-success">Success</button>
                </ul>
            </div>
        </div>

    );
}

export default Cart;