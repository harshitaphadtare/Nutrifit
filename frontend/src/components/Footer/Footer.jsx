import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
    const year= new Date().getFullYear();
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} className="company-logo" alt="" />
                <p>Nutrifit is your trusted partner in healthy, high-protein meal delivery. We cater to gym enthusiasts, busy professionals, and anyone committed to a healthier lifestyle. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-653-2112</li>
                    <li>cotact@nutrifit.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright {year} © Nutrifit.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer;
