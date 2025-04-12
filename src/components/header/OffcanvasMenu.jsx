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
                        <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Chiudi"></button>
                        <div className="offcanvase__top">
                            <div className="offcanvase__logo">
                                <Link to="/">
                                    <img src="/assets/images/logo/logo__two.png" alt="logo" />
                                </Link>
                            </div>
                            <p className="description">
                                Benvenuti al Grand Hotel Selinunte, dove il lusso incontra il comfort nel cuore di Marinella. Siamo da sempre dedicati a offrire esperienze uniche.
                            </p>
                        </div>
                        <div className="offcanvase__mobile__menu">
                            <div className="mobile__menu__active">
                                <nav className="mobile__menu__nav">
                                    <ul className="list-unstyled" style={{ color: "#fff" }}>
                                        <li className="slide active">
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="/home-video">
                                                Home (Hotel Seaside)
                                            </Link>
                                        </li>
                                        <li className="slide">
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="/about">Chi siamo</Link>
                                        </li>
                                        <li className={`slide has__children ${activeMenu === 2 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="#" onClick={() => toggleMenu(2)}>
                                                Camere
                                                <span className="toggle" style={{ color: "#fff" }} />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 2 ? "block" : "none", color: "#fff" }}>
                                                <li><Link to="/room-one">Camera Uno</Link></li>
                                                <li><Link to="/room-two">Camera Due</Link></li>
                                                <li><Link to="/room-three">Camera Tre</Link></li>
                                                <li><Link to="/room-four">Camera Quattro</Link></li>
                                                <li><Link to="/room-details-1">Dettagli Camera Uno</Link></li>
                                                <li><Link to="/room-details-2">Dettagli Camera Due</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`slide has__children ${activeMenu === 3 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="#" onClick={() => toggleMenu(3)}>
                                                Blog
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 3 ? "block" : "none", color: "#fff" }}>
                                                <li><Link to="/blog">Blog</Link></li>
                                                <li><Link to="/blog/1">Dettagli Blog</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`slide has__children ${activeMenu === 4 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="#" onClick={() => toggleMenu(4)}>
                                                Pagine
                                                <span className="toggle" />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 4 ? "block" : "none", color: "#fff" }}>
                                                <li><Link to="/restaurant">Ristorante</Link></li>
                                                <li><Link to="/gallery">Galleria</Link></li>
                                                <li><Link to="/service">Servizi</Link></li>
                                                <li><Link to="/event">Eventi</Link></li>
                                                <li><Link to="/activities">Attività</Link></li>
                                            </ul>
                                        </li>
                                        <li className="slide">
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="/contact">Contattaci</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="offcanvase__bottom">
                            <div className="offcanvase__address">
                                <div className="item">
                                    <span className="h6">Telefono</span>
                                    <Link to="tel:+390924076901">
                                        +390924076901 <i className="flaticon-phone-flip" />
                                    </Link>
                                </div>
                                <div className="item">
                                    <span className="h6">Email</span>
                                    <Link to="mailto:booking@grandhotelselinunte.com">
                                        <i className="flaticon-envelope" />
                                        booking@grandhotelselinunte.com
                                    </Link>
                                </div>
                                <div className="item">
                                    <span className="h6">Indirizzo</span>
                                    <Link to="#">
                                        <i className="flaticon-marker" />
                                        Contrada, Via Trenta Salme, 91022 Marinella TP, Italia
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Desktop Menu */}
                    <div className="right__side desktop__menu">
                        <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Chiudi"></button>
                        <div className="rts__desktop__menu">
                            <nav className="desktop__menu offcanvas__menu">
                                <ul className="list-unstyled">
                                    <li className="slide active">
                                        <Link className="slide__menu__item" to="/home-video">
                                            Home (Hotel Seaside)
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link className="slide__menu__item" to="/about">Chi siamo</Link>
                                    </li>
                                    <li className={`slide has__children ${activeMenu === 2 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(2)}>
                                            Camere
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 2 ? "block" : "none" }}>
                                            <li><Link to="/room-one">Camera Uno</Link></li>
                                            <li><Link to="/room-two">Camera Due</Link></li>
                                            <li><Link to="/room-three">Camera Tre</Link></li>
                                            <li><Link to="/room-four">Camera Quattro</Link></li>
                                            <li><Link to="/room-details-1">Dettagli Camera Uno</Link></li>
                                            <li><Link to="/room-details-2">Dettagli Camera Due</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`slide has__children ${activeMenu === 3 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(3)}>
                                            Blog
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 3 ? "block" : "none" }}>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/blog/1">Dettagli Blog</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`slide has__children ${activeMenu === 4 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(4)}>
                                            Pagine
                                            <span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 4 ? "block" : "none" }}>
                                            <li><Link to="/restaurant">Ristorante</Link></li>
                                            <li><Link to="/gallery">Galleria</Link></li>
                                            <li><Link to="/service">Servizi</Link></li>
                                            <li><Link to="/event">Eventi</Link></li>
                                            <li><Link to="/activities">Attività</Link></li>
                                        </ul>
                                    </li>
                                    <li className="slide">
                                        <Link className="slide__menu__item" to="/contact">Contattaci</Link>
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
