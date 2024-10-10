import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons for social media

function Footer() {
    return (
        <div className="footer text-center py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h5>Explore More at CulinaryCanvas</h5>
                        <ul className="list-unstyled">
                        <li><NavLink to ='Home' className="footer-link">Home</NavLink></li>
                        <li><NavLink to ='pages/CulinaryGallery' className="footer-link">Culinary Gallery</NavLink></li>
                            <li><NavLink to ='pages/About' className="footer-link">About Us</NavLink></li>
                            <li><NavLink to ='pages/ContactUs' className="footer-link">Contact Us</NavLink></li>
                            {/* <li><a href='#' className="footer-link">Privacy Policy</a></li> */}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5>Get in Touch</h5>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li className="mx-2"><NavLink to="https://facebook.com" className="footer-social-link"><FaFacebook size={24} /></NavLink></li>
                            <li className="mx-2"><NavLink to="https://www.youtube.com" className="footer-social-link"><FaYoutube size={24} /></NavLink></li>
                            <li className="mx-2"><NavLink to="https://instagram.com" className="footer-social-link"><FaInstagram size={24} /></NavLink></li>
                        </ul>
                    </div>
                </div>
                <p className="mb-0">© 2024 CulinaryCanvas. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;