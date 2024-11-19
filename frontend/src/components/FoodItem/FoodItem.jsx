import React, { useContext} from 'react';
import "./FoodItem.css";
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,nutrients,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

    return (
        <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-img' src={image} alt="" />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} />
                :<div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            
            <p className='food-name'>{name}</p>
            <p className="food-item-description nutrients">{nutrients}</p>
            <p className="food-item-description">{description}</p>
            <div className="food-item-name-rating">
                <p className="food-item-price">₹{price}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
        </div>
        </div>
    )
}

export default FoodItem;
