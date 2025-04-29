import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OffcanvasMenu from './OffcanvasMenu';
import LoginForm from '../form/LoginForm';
import SignUpForm from '../form/SignUpForm';

function HeaderDark() {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* menu header */}
            <header className={`main__header header__function ${isSticky ? 'is__sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="main__header__wrapper">
                            <div className="main__nav">
                                <div className="navigation d-none d-lg-block">
                                    <nav className="navigation__menu" id="main__menu">
                                        <ul className="list-unstyled">
                                            <li className="navigation__menu--item has-child has-arrow">
                                                <Link to="/" className="navigation__menu--item__link">
                                                    Home
                                                </Link>
                                                <div className="has__mega__menu">
                                                    <div className="row g-30 row-cols-1 row-cols-md-3 row-cols-lg-5">
                                                        <div className="menu__item">
                                                            <Link to="/">
                                                                <img
                                                                    src="/assets/images/menu/08.webp"
                                                                    height={250}
                                                                    alt=""
                                                                />
                                                                <span>Grand Hotel Selinunte</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="navigation__menu--item has-child has-arrow">
                                                <Link to="/" className="navigation__menu--item__link">
                                                    Camere
                                                </Link>
                                                <ul className="submenu sub__style" role="menu">
                                                    <li role="menuitem" className="has-child has-arrow">
                                                        <Link to="/">tipologia di camera</Link>
                                                        <ul className="sub__style" role="menu">
                                                            <li role="menuitem">
                                                                <Link to="/room-one">Camera singola</Link>
                                                            </li>
                                                            <li role="menuitem">
                                                                <Link to="/room-two">Camera matrimoniale</Link>
                                                            </li>
                                                            <li role="menuitem">
                                                                <Link to="/room-three">Camera tripla</Link>
                                                            </li>
                                                            <li role="menuitem">
                                                                <Link to="/room-four">Camera quadrupla</Link>
                                                            </li>
                                                            <li role="menuitem">
                                                                <Link to="/room-five">Camera quintupla</Link>
                                                            </li>
                                                            
                                                        </ul>
                                                    </li>
                                                    <li role="menuitem" className="has-child has-arrow">
                                                        <Link to="/">Dettagli Camera</Link>
                                                        <ul className="sub__style" role="menu">
                                                            <li role="menuitem">
                                                                <Link to="/room/1">Dettagli Camera 1</Link>
                                                            </li>
                                                            <li role="menuitem">
                                                                <Link to="/room/2">Dettagli Camera 2</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="navigation__menu--item has-child has-arrow">
                                                <Link to="/" className="navigation__menu--item__link">
                                                    Pagine
                                                </Link>
                                                <ul className="submenu sub__style" role="menu">
                                                <li role="menuitem">
                                                    <Link to="/chat">Assistenza via chat</Link>
                                                </li>
                                                    <li role="menuitem">
                                                        <Link to="/about">Chi Siamo</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/gallery">Galleria</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/service">Servizi</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/event">Eventi</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link to="/activities">Attività</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                           
                                            <li className="navigation__menu--item">
                                                <Link to="/contact" className="navigation__menu--item__link">
                                                    Contatto
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="main__logo">
                                <Link to="/home">
                                    <img
                                        className="logo__class myclass"
                                        src="/assets/images/logo/logo__two.png"
                                        alt="moonlit"
                                    />
                                </Link>
                            </div>
                            <div className="main__right">
                                <button
                                    className="theme-btn btn-style sm-btn border d-none d-lg-block"
                                    onClick={() => setIsLoginOpen(true)}
                                >
                                    <span>Accedi</span>
                                </button>

                                {/* Bottone Registrati */}
                                <button
                                    className="theme-btn btn-style sm-btn border d-none d-lg-block"
                                    onClick={() => setIsSignupOpen(true)}
                                >
                                    <span>Registrati</span>
                                </button>

                                {/* Bottone Prenota Ora */}
                                <Link to="/room/1" className="theme-btn btn-style sm-btn fill">
                                    <span>Prenota Ora</span>
                                </Link>

                                {/* Bottone Menu Mobile */}
                                <button
                                    className="theme-btn btn-style sm-btn fill menu__btn d-lg-none"
                                    onClick={() => setIsOffcanvasOpen(true)}
                                >
                                    <span>
                                        <img src="/assets/images/icon/menu-icon.svg" alt="menu" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <OffcanvasMenu isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />

            {/* Modale Login */}
            <LoginForm
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onSignupOpen={() => {
                    setIsLoginOpen(false);
                    setIsSignupOpen(true);
                }}
            />

            {/* Modale Registrazione */}
            <SignUpForm
                isOpen={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
                onLoginOpen={() => {
                    setIsSignupOpen(false);
                    setIsLoginOpen(true);
                }}
            />

            {/* fine menu header */}
        </>
    )
}

export default HeaderDark
