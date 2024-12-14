import React, { useContext, useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [greet,setGreet] = useState("");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  function greetings() {
    const hour = new Date().getHours(); 
    if (hour >= 0 && hour < 12) {
      setGreet("Good Morning!");
    } else if (hour >= 12 && hour < 19) {
      setGreet("Good Afternoon");
    } else {
      setGreet("Good Evening");
    }
  }

  useEffect(() => {
    greetings();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="nutrifit-logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket-icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <div className="container">
            <div className="wrapper">
              <button className="btn" onClick={() => setShowLogin(true)}>
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
        ) : (
          <div className="navbar-profile" ref={dropdownRef}>
            <img
              src={assets.profile_icon}
              alt="profile"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <ul
                className="nav-profile-dropdown"
                onClick={(e) => e.stopPropagation()} 
              > 
              <li className='heading-name'>{greet}</li>
              <hr />
                <li onClick={()=>navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="orders" />
                  <p>Orders</p>
                </li>
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="logout" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
