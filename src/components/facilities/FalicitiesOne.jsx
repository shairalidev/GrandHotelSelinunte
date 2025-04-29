import React from 'react'
import { Link } from 'react-router-dom'

function FacilitiesOne() {
    return (
        <>
            {/* facilities */}
            <div className="rts__section facilities__area has__background has__shape py-90">
                <div className="section__shape">
                    <img src="/assets/images/shape/facility-1.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Servizi</span>
                                <h2 className="section__title">Servizi dell'Hotel</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay=".5s">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/bed.svg" alt="" />
                                    </div>
                                    <Link to="/">
                                        <h6 className="card-title h6 mb-15">Camere</h6>
                                    </Link>
                                    <p className="card-text">
                                    Varie tipologie di camere, dalla singola alla quintupla, 
                                    dotate di tutti i comfort essenziali come i letti.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                            <div className="card-body">
                                <div className="icon">
                                    <img src="/assets/images/icon/security.svg" alt="Security Icon" />
                                </div>
                                <Link to="/">
                                    <h6 className="card-title h6 mb-15">24/7 sicurezza</h6>
                                </Link>
                                <p className="card-text">
                                    L'hotel è aperto 24 ore su 24, con un portiere sempre presente alla reception, anche durante la notte. Le aree comuni sono costantemente videosorvegliate per garantire la massima sicurezza.
                                </p>
                            </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                            <div className="card-body">
                                <div className="icon">
                                    <img src="/assets/images/icon/desk.svg" alt="Desk Icon" />
                                </div>
                                <Link to="/">
                                    <h6 className="card-title h6 mb-15">Scrivania in Camera</h6>
                                </Link>
                                <p className="card-text">
                                    Una comoda scrivania ideale per lavorare, studiare o scrivere. Perfetta per rendere il tuo soggiorno ancora più produttivo e confortevole.
                                </p>
                            </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/swimming-pool.svg" alt="" />
                                    </div>
                                    <Link to="/">
                                        <h6 className="card-title h6 mb-15">Piscina</h6>
                                    </Link>
                                    <p className="card-text">
                                    piscine per relax o attività fisica. Offriamo servizio
                                    di animazione diurna e serale per adulti e bambini con mini club e varie attività sportive pomeridiane.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* facilities end */}
        </>
    )
}

export default FacilitiesOne
