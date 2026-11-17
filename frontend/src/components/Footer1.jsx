import React from 'react'
import { Link } from 'react-router-dom'

const Footer1 = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="footer footer-one">
                <div className="footer-top m-0 p-5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-widget footer-about">
                                    <div className="footer-logo">
                                        <Link to="/">
                                            <img loading="lazy" decoding="async" src="/assets/img/logo-01.svg" alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-about-content">
                                        <p>
                                            Effortlessly schedule your medical appointments with
                                            DOC4U. Connect with healthcare professionals, manage
                                            appointments &amp; prioritize your well being{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="footer-widget footer-menu">
                                            <h2 className="footer-title">Company</h2>
                                            <ul>
                                                <li>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link>Specialities</Link>
                                                </li>
                                                <li>
                                                    <Link>Video Consult</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="footer-widget footer-menu">
                                            <h2 className="footer-title">Specialities</h2>
                                            <ul>
                                                <li>
                                                    <a href="search.html">Neurology</a>
                                                </li>
                                                <li>
                                                    <a href="search.html">Cardiologist</a>
                                                </li>
                                                <li>
                                                    <a href="search.html">Dentist</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4">
                                        <div className="footer-widget footer-contact">
                                            <h2 className="footer-title">Contact Us</h2>
                                            <div className="footer-contact-info">
                                                <div className="footer-address">
                                                    <p>
                                                        <i className="feather-map-pin" /> India
                                                    </p>
                                                </div>
                                                <div className="footer-address">
                                                    <p>
                                                        <i className="feather-phone-call" /> +91 34762378623
                                                    </p>
                                                </div>
                                                <div className="footer-address mb-0">
                                                    <p>
                                                        <i className="feather-mail" />{" "}
                                                        <a>docforyouhelpdesk@gmail.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-7">
                                <div className="footer-widget">
                                    <h2 className="footer-title">Join Our Network On</h2>
                                
                                    <div className="social-icon">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <i className="fab fa-facebook text-dark" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <i className="fab fa-instagram text-dark" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <i className="fab fa-twitter text-dark" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <i className="fab fa-linkedin-in text-dark" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        {/* Copyright */}
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <div className="copyright-text">
                                        <p className="mb-0">
                                            Copyright © 2024 DOC4U. All Rights Reserved
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    {/* Copyright Menu */}
                                    <div className="copyright-menu">
                                        <ul className="policy-menu">
                                            <li>
                                                <a href="privacy-policy.html">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="terms-condition.html">Terms and Conditions</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /Copyright Menu */}
                                </div>
                            </div>
                        </div>
                        {/* /Copyright */}
                    </div>
                </div>
            </footer>
            {/* /Footer */}
        </div>
    )
}

export default Footer1