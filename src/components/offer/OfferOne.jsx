import React from 'react'
import { Link } from 'react-router-dom'

function OfferOne() {
    return (
        <>
            {/* special section start */}
            <div className="rts__section offer__area is__home__one has__shape">
                <div className="container">
                    <div className="row position-relative justify-content-center text-center mb-30">
                        <div className="col-lg-6 wow fadeInUp">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">
                                Offerta Speciale
                                </span>
                                <h2 className="section__title">Offerta Speciale</h2>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row justify-content-center g-30">
                        <div className="col-lg-10 col-xl-6 col-xxl-5">
                            <div className="single__offer__card">
                                <Link to="/#">
                                    <img src="/assets/images/offer/5.webp" alt="" />
                                </Link>
                                <div className="single__offer__card__content">
                                    <Link to="/#" className="h4">
                                    Pacchetto Famiglia
                                    </Link>
                                    <ul className="offer__included list-unstyled">
                                        <li>
                                            <i className="flaticon-check-circle" /> 15% off suite famiglie
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" />pasto gratuito per i bambini
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Biglietti omaggio
                                        </li>
                                        <li>
                                            <i className="flaticon-check-circle" /> Parco divertimenti locale
                                        </li>
                                    </ul>
                                    <h3 className="offer__price mb-0">$39.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 col-xl-6 col-xxl-7">
                            <div className="d-flex flex-column gap-30">
                                <div className="single__offer__card is__flex">
                                    <Link to="/#">
                                        <img
                                            src="/assets/images/offer/6.webp"
                                            width={265}
                                            height={310}
                                            alt=""
                                        />
                                    </Link>
                                    <div className="single__offer__card__content">
                                        <Link to="/#" className="h5">
                                        Ritiro Spa
                                        </Link>
                                        <ul className="offer__included list-unstyled">
                                            <li>
                                                <i className="flaticon-check-circle" /> Due notti di soggiorno in camera
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Trattamenti spa giornalieri
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Colazione e pranzo salutari
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Accesso completo alla spa{" "}
                                            </li>
                                        </ul>
                                        <h4 className="offer__price mb-0">$39.00</h4>
                                    </div>
                                </div>
                                <div className="single__offer__card is__flex">
                                    <Link to="/#">
                                        <img
                                            src="/assets/images/offer/7.webp"
                                            width={265}
                                            height={310}
                                            alt=""
                                        />
                                    </Link>
                                    <div className="single__offer__card__content">
                                        <Link to="/#" className="h5">
                                            Fuga Romantica
                                        </Link>
                                        <ul className="offer__included list-unstyled">
                                            <li>
                                                <i className="flaticon-check-circle" /> Due notti di soggiorno in camera
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Trattamenti spa giornalieri
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Colazione e pranzo salutari
                                            </li>
                                            <li>
                                                <i className="flaticon-check-circle" /> Accesso completo alla spa
                                            </li>
                                            <h4 className="offer__price mb-0">$39.00</h4>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* special section end */}
        </>

    )
}

export default OfferOne