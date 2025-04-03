import React, { useState } from "react";
import { Link } from "react-router-dom";

function OffcanvasMenu({ isOpen, onClose }) {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    return (
        <div className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`} style={{ visibility: isOpen ? "visible" : "hidden" }}>
            <div className="rts__btstrp__offcanvase">
                <div className="offcanvase__wrapper">
                    {/* Left Side - Mobile Menu */}
                    <div className="left__side mobile__menu">
                        <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
                        <div className="offcanvase__top">
                            <div className="offcanvase__logo">
                                <Link to="/">
                                    <img src="/assets/images/logo/logo__two.svg" alt="logo" />
                                </Link>
                            </div>
                            <p className="description">
                                Welcome to Grand Hotel Selinunte, where luxury meets comfort in the heart of Marinella, we have been dedicated to providing.
                            </p>
                        </div>
                        <div className="offcanvase__mobile__menu">
                            <div className="mobile__menu__active">
                                <nav className="mobile__menu__nav">
                                    <ul className="list-unstyled">
                                        {/* Home Menu (modified) */}
                                        <li className="slide active">
                                            <Link className="slide__menu__item" to="/home-video">
                                                Home (Hotel Seaside)
                                            </Link>
                                        </li>

                                        {/* About Us */}
                                        <li className="slide">
                                            <Link className="slide__menu__item" to="/about">About us</Link>
                                        </li>

                                        {/* Rooms Menu */}
                                        <li className={`slide has__children ${activeMenu === 2 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(2)}>
                                                Rooms
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 2 ? "block" : "none" }}>
                                                <li><Link to="/room-one">Room One</Link></li>
                                                <li><Link to="/room-two">Room Two</Link></li>
                                                <li><Link to="/room-three">Room Three</Link></li>
                                                <li><Link to="/room-four">Room Four</Link></li>
                                                <li><Link to="/room-details-1">Room Details One</Link></li>
                                                <li><Link to="/room-details-2">Room Details Two</Link></li>
                                            </ul>
                                        </li>

                                        {/* Blog Menu */}
                                        <li className={`slide has__children ${activeMenu === 3 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(3)}>
                                                Blog
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 3 ? "block" : "none" }}>
                                                <li><Link to="/blog">Blog</Link></li>
                                                <li><Link to="/blog/1">Blog Details</Link></li>
                                            </ul>
                                        </li>

                                        {/* Pages Menu */}
                                        <li className={`slide has__children ${activeMenu === 4 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(4)}>
                                                Pages
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 4 ? "block" : "none" }}>
                                                <li><Link to="/restaurant">Restaurant</Link></li>
                                                <li><Link to="/gallery">Gallery</Link></li>
                                                <li><Link to="/service">Service</Link></li>
                                                <li><Link to="/event">Event</Link></li>
                                                <li><Link to="/activities">Activities</Link></li>
                                            </ul>
                                        </li>

                                        {/* Contact Us */}
                                        <li className="slide">
                                            <Link className="slide__menu__item" to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="offcanvase__bottom">
                            <div className="offcanvase__address">
                                <div className="item">
                                    <span className="h6">Phone</span>
                                    <Link to="tel:+1234567890">
                                        <i className="flaticon-phone-flip" /> +1234567890
                                    </Link>
                                </div>
                                <div className="item">
                                    <span className="h6">Email</span>
                                    <Link to="mailto:info@hostie.com">
                                        <i className="flaticon-envelope" />
                                        info@hostie.com
                                    </Link>
                                </div>
                                <div className="item">
                                    <span className="h6">Address</span>
                                    <Link to="#">
                                        <i className="flaticon-marker" /> 280 Augusta Avenue, M5T 2L9 Toronto,
                                        Canada
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Desktop Menu */}
                    <div className="right__side desktop__menu">
                        <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
                        <div className="rts__desktop__menu">
                            <nav className="desktop__menu offcanvas__menu">
                                <ul className="list-unstyled">
                                    {/* Home Menu (modified) */}
                                    <li className="slide active">
                                        <Link className="slide__menu__item" to="/home-video">
                                            Home (Hotel Seaside)
                                        </Link>
                                    </li>

                                    {/* About Us */}
                                    <li className="slide">
                                        <Link className="slide__menu__item" to="/about">About us</Link>
                                    </li>

                                    {/* Rooms Menu */}
                                    <li className={`slide has__children ${activeMenu === 2 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(2)}>
                                            Rooms
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 2 ? "block" : "none" }}>
                                            <li><Link to="/room-one">Room One</Link></li>
                                            <li><Link to="/room-two">Room Two</Link></li>
                                            <li><Link to="/room-three">Room Three</Link></li>
                                            <li><Link to="/room-four">Room Four</Link></li>
                                            <li><Link to="/room-details-1">Room Details One</Link></li>
                                            <li><Link to="/room-details-2">Room Details Two</Link></li>
                                        </ul>
                                    </li>

                                    {/* Blog Menu */}
                                    <li className={`slide has__children ${activeMenu === 3 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(3)}>
                                            Blog
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 3 ? "block" : "none" }}>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/blog/1">Blog Details</Link></li>
                                        </ul>
                                    </li>

                                    {/* Pages Menu */}
                                    <li className={`slide has__children ${activeMenu === 4 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(4)}>
                                            Pages
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 4 ? "block" : "none" }}>
                                            <li><Link to="/restaurant">Restaurant</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/service">Service</Link></li>
                                            <li><Link to="/event">Event</Link></li>
                                            <li><Link to="/activities">Activities</Link></li>
                                        </ul>
                                    </li>

                                    {/* Contact Us */}
                                    <li className="slide">
                                        <Link className="slide__menu__item" to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OffcanvasMenu;
