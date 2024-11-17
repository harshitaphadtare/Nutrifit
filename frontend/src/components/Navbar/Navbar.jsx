import React, { useState } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/frontend_assets/assets';


const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="feastio-logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>mobile app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="basket-icon" />
            <div className="dot"></div>
        </div>
        {/* signup button */}
        <div className="container">
          <div className="wrapper">
              <button className="btn">
                  <div className="btn__bg">
                      <span className="btn__bg__layer btn__bg__layer-first"></span>
                      <span className="btn__bg__layer btn__bg__layer-second"></span>
                      <span className="btn__bg__layer btn__bg__layer-third"></span>
                  </div>
                  <span className="btn__text-out">sign in</span>
                  <span className="btn__text-in">sign in</span>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

