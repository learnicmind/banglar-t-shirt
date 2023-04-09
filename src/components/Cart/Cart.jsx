import React from 'react';
import './Cart.css';


const Cart = ({ cart, handleRemoveFromCar }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    else{
        message = <div>
            <h3>jomidarer bachcha</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'red' : 'blue' }>Order Summary: {cart.length}</h2>
            <p className={`bold ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {cart.length > 2 ? <span className='orange'>Aro kino</span> : <span>gorib</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button 
                onClick={() => handleRemoveFromCar(tshirt._id)}
                >X</button></p>)
            }

            {
                cart.length === 2 && <p>Double Bonanza!!</p>
            }
            {
                cart.length === 3 || <h3>Vai 3 ta to hoilona!!</h3>
            }
        </div>
    );
};

export default Cart;

/**
 * Conditional Rendering
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is fale then the next thing will be displayed)
*/

/**
 * Conditional CSS class
 * 1. use ternary
 * 2. ternary inside template string
 * */ 