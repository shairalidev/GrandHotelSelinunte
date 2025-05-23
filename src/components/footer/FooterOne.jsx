import React from 'react'
import { Link } from 'react-router-dom'

function FooterOne() {
    return (
        <>
            {/* stile del footer uno */}
            <footer className="rts__section rts__footer is__common__footer footer__background has__shape">
                <div className="section__shape">
                    <div className="shape__1">
                        <img src="/assets/images/footer/shape-1.svg" alt="" />
                    </div>
                    <div className="shape__2">
                        <img src="/assets/images/footer/shape-2.svg" alt="" />
                    </div>
                    <div className="shape__3">
                        <img src="/assets/images/footer/shape-3.svg" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="footer__newsletter">
                            <span className="h2">Iscriviti alla nostra Newsletter</span>
                            <div className="rts__form">
                                <form>
                                    <input
                                        type="email"
                                        name="email"
                                        id="subscription"
                                        placeholder="Inserisci la tua email"
                                        required=""
                                    />
                                    <button type="submit">Iscriviti</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer__widget__wrapper">
                            <div className="rts__widget">
                                <Link to="/">
                                    <img
                                        className="footer__logo myclass"
                                        src="/assets/images/logo/logofinal.svg"
                                        alt="footer logo"
                                        style={{ width: "450px", height: "auto" }}
                                    />
                                </Link>
                                <p className="font-sm max-290 mt-20">
                                    Ogni camera dispone di letti confortevoli, lenzuola di alta qualità e una selezione di comfort per garantire un sonno ristoratore.
                                </p>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Link Utili</span>
                                <ul>
                                    <li>
                                        <Link to="#" aria-label="footer__link">
                                            Camere 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" aria-label="footer__link">
                                            mini bazar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" aria-label="footer__link">
                                        attività sportive pomeridiane
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" aria-label="footer__link">
                                        servizio di intrattenimento
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Servizi per gli Ospiti</span>
                                <ul>
                                    <li>Reception 24/7</li>
                                    <li>Parcheggio</li>
                                    <li>Ambiente tranquillo</li>
                                    <li>Wi-Fi Gratuito</li>
                                    <li>Servizio Concierge</li>
                                </ul>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Contattaci</span>
                                <ul>
                                    <li>
                                        <Link to="tel:+393288170176">
                                            <i className="flaticon-phone-flip" /> +393288170176
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:ghsbooking23@gmail.com">
                                            <i className="flaticon-envelope" />
                                            ghsbooking23@gmail.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="flaticon-marker" /> Contrada, Via Trenta Salme, 91022 Marinella TP, Italia
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__text">
                    <div className="container">
                        <div className="row">
                            <div className="copyright__wrapper">
                                <p className="mb-0">
                                    Copyright © {new Date().getFullYear()} Grand Hotel Selinunte. Tutti i diritti riservati.
                                </p>
                                <div className="footer__social__link">
                                <a
  href="https://www.facebook.com/GHSSelinunte/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="footer__social"
  className="link__item"
>
  Facebook
</a>

                                    <a
  href="https://api.whatsapp.com/send?phone=393288170176"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="footer__social"
  className="link__item"
>
  Whatsapp
</a>

<a
  href="https://www.instagram.com/grand_hotel_selinunte/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="footer__social"
  className="link__item"
>
  Instagram
</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* fine stile del footer uno */}
        </>
    )
}

export default FooterOne
