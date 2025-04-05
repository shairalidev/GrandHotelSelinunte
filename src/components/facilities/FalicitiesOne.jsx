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
                                        <h6 className="card-title h6 mb-15">Camere e Suite</h6>
                                    </Link>
                                    <p className="card-text">
                                        Varie tipologie di camere, dalle standard alle suite di lusso, dotate
                                        di tutti i comfort essenziali come letti.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/security.svg" alt="" />
                                    </div>
                                    <Link to="/">
                                        <h6 className="card-title h6 mb-15">Sicurezza 24 Ore</h6>
                                    </Link>
                                    <p className="card-text">
                                        Personale di sicurezza in loco e videosorveglianza avanzata. Da camere standard
                                        a suite di lusso, con deposito sicuro per oggetti di valore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/gym.svg" alt="" />
                                    </div>
                                    <Link to="/">
                                        <h6 className="card-title h6 mb-15">Centro Fitness</h6>
                                    </Link>
                                    <p className="card-text">
                                        Dotato di macchine per l’esercizio e pesi. Offriamo massaggi,
                                        trattamenti per il viso e altri servizi benessere.
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
                                        Piscine interne o esterne per relax o esercizio. Offriamo
                                        massaggi, trattamenti per il viso e altri servizi benessere.
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
