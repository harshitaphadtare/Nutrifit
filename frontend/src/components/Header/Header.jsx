import React from 'react';
import './Header.css';
import { Navigate } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your delicious healthy food here!</h2>
        <p>We specialize in delivering fresh, nutritious meals straight to your doorstep, ensuring you enjoy delicious, balanced food without the hassle. Fuel your body with the goodness it deserves, and let us take care of the rest. </p>
        <div onClick={()=>Navigate("#explore-menu")} className="container">
          <a href="#explore-menu">
            <div className="wrapper">
                <button className="btn">
                    <div className="btn__bg">
                        <span className="btn__bg__layer btn__bg__layer-first"></span>
                        <span className="btn__bg__layer btn__bg__layer-second"></span>
                        <span className="btn__bg__layer btn__bg__layer-third"></span>
                    </div>
                    <span className="btn__text-out">View Menu</span>
                    <span className="btn__text-in">View Menu</span>
                </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;
