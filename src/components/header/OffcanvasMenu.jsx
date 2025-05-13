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
                    {/* Mobile Menu */}
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
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="/" onClick={onClose}>
                                                Home
                                            </Link>
                                        </li>
                                        <li className={`slide has__children ${activeMenu === 2 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="#" onClick={() => toggleMenu(2)}>
                                                Camere
                                                <span className="toggle" style={{ color: "#fff" }} />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 2 ? "block" : "none", color: "#fff" }}>
                                                <li className="has__children">
                                                    <ul className="slide__menu" style={{ display: activeMenu === "type" ? "block" : "none", color: "#fff" }}>
                                                        <li>
                                                            <Link to="/room-one" style={{ color: "#fff" }} onClick={onClose}>
                                                                Camera singola
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/room-two" style={{ color: "#fff" }} onClick={onClose}>
                                                                Camera matrimoniale
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/room-three" style={{ color: "#fff" }} onClick={onClose}>
                                                                Camera tripla
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/room-four" style={{ color: "#fff" }} onClick={onClose}>
                                                                Camera quadrupla
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/room-five" style={{ color: "#fff" }} onClick={onClose}>
                                                                Camera quintupla
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                               
                                            </ul>
                                        </li>
                                        <li className={`slide has__children ${activeMenu === 4 ? "active" : ""}`}>
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="#" onClick={() => toggleMenu(4)}>
                                                Pagine
                                                <span className="toggle" style={{ color: "#fff" }} />
                                            </Link>
                                            <ul className="slide__menu" style={{ display: activeMenu === 4 ? "block" : "none", color: "#fff" }}>
                                                <li>
                                                    <Link to="/chat" style={{ color: "#fff" }} onClick={onClose}>
                                                        Assistenza via chat
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/about" style={{ color: "#fff" }} onClick={onClose}>
                                                        Chi Siamo
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/gallery" style={{ color: "#fff" }} onClick={onClose}>
                                                        Galleria
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/service" style={{ color: "#fff" }} onClick={onClose}>
                                                        Servizi
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/event" style={{ color: "#fff" }} onClick={onClose}>
                                                        Eventi
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/activities" style={{ color: "#fff" }} onClick={onClose}>
                                                        Attività
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="slide">
                                            <Link className="slide__menu__item" style={{ color: "#fff" }} to="/contact" onClick={onClose}>
                                                Contatto
                                            </Link>
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
                                    <Link to="mailto:ghsbooking23@gmail.com">
                                        <i className="flaticon-envelope" />
                                        ghsbooking23@gmail.com
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

                    {/* Desktop Menu */}
                    <div className="right__side desktop__menu">
                        <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Chiudi"></button>
                        <div className="rts__desktop__menu">
                            <nav className="desktop__menu offcanvas__menu">
                                <ul className="list-unstyled">
                                    <li className="slide active">
                                        <Link className="slide__menu__item" to="/" onClick={onClose}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className={`slide has__children ${activeMenu === 2 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(2)}>
                                            Camere<span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 2 ? "block" : "none" }}>
                                            <li className="has__children">
                                                <Link to="#" onClick={() => toggleMenu("type")} className="slide__menu__item">
                                                    tipologia di camera<span className="toggle" />
                                                </Link>
                                                <ul className="slide__menu" style={{ display: activeMenu === "type" ? "block" : "none" }}>
                                                    <li>
                                                        <Link to="/room-one" onClick={onClose}>
                                                            Camera singola
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/room-two" onClick={onClose}>
                                                            Camera matrimoniale
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/room-three" onClick={onClose}>
                                                            Camera tripla
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/room-four" onClick={onClose}>
                                                            Camera quadrupla
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/room-five" onClick={onClose}>
                                                            Camera quintupla
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has__children">
                                                <ul className="slide__menu" style={{ display: activeMenu === "details" ? "block" : "none" }}>
                                                    <li>
                                                        <Link to="/room/1" onClick={onClose}>
                                                            Dettagli Camera 1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/room/2" onClick={onClose}>
                                                            Dettagli Camera 2
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`slide has__children ${activeMenu === 4 ? "active" : ""}`}>
                                        <Link className="slide__menu__item" to="#" onClick={() => toggleMenu(4)}>
                                            Pagine<span className="toggle" />
                                        </Link>
                                        <ul className="slide__menu" style={{ display: activeMenu === 4 ? "block" : "none" }}>
                                            <li><Link to="/chat" onClick={onClose}>Assistenza via chat</Link></li>
                                            <li><Link to="/about" onClick={onClose}>Chi Siamo</Link></li>
                                            <li><Link to="/gallery" onClick={onClose}>Galleria</Link></li>
                                            <li><Link to="/service" onClick={onClose}>Servizi</Link></li>
                                            <li><Link to="/event" onClick={onClose}>Eventi</Link></li>
                                            <li><Link to="/activities" onClick={onClose}>Attività</Link></li>
                                        </ul>
                                    </li>
                                    <li className="slide">
                                        <Link className="slide__menu__item" to="/contact" onClick={onClose}>
                                            Contatto
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffcanvasMenu;
