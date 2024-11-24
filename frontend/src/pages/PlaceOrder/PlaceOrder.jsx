import React, { useContext } from 'react';
import "./PlaceOrder.css";
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const {cartItems,getTotalCartAmount} =useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>  
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              {getTotalCartAmount() === 0 ?<p>₹0</p>:<p>₹{20}</p>}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              {getTotalCartAmount() === 0 ?<b>₹0</b>:<p>₹{getTotalCartAmount() + 20}</p>}
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>
      </div>
    </form>
  )
}

export default PlaceOrder;
