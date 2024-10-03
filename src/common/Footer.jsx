import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons for social media

function Footer() {
    return (
        <div className="footer text-center py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h5>Explore More at Culinary Canvas</h5>
                        <ul className="list-unstyled">
                            <li><a href='#' className="footer-link">About Us</a></li>
                            <li><a href='#' className="footer-link">Blog</a></li>
                            <li><a href='#' className="footer-link">Contact Us</a></li>
                            <li><a href='#' className="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h5>Get in Touch</h5>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li className="mx-2"><a href="#" className="footer-social-link"><FaFacebook size={24} /></a></li>
                            <li className="mx-2"><a href="#" className="footer-social-link"><FaYoutube size={24} /></a></li>
                            <li className="mx-2"><a href="#" className="footer-social-link"><FaInstagram size={24} /></a></li>
                        </ul>
                    </div>
                </div>
                <p className="mb-0">© 2024 NutriBite. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;