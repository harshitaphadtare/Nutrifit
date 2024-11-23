import React from 'react';
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
      </div>  
      <div className="place-order-right">
      {/* start */}
      </div>
    </form>
  )
}

export default PlaceOrder;
