import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { jarallax } from 'jarallax';

function FacilitiesSeven() {
    useEffect(() => {
        function isMobileDevice() {
            return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        if (!isMobileDevice()) {
            document.querySelectorAll('.jarallax').forEach(element => {
                jarallax(element, {});
            });
        } else {
            console.log('Jarallax ignorato sui dispositivi mobili');
        }

    }, []);

    return (
        <>
            {/* le nostre strutture */}
            <div className="rts__section facility__area is__about has__background has__shape">
                <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
                    <img src="/assets/images/pages/about-shape.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="facility__content">
                                <div className="section__content__left">
                                    <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                        Strutture
                                    </span>
                                    <h2 className="content__title h2 lh-1">Strutture dell'Hotel</h2>
                                </div>
                                <div className="row mt-20 g-5 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/bed.svg" alt="" />
                                                </div>
                                                <Link to="#">
                                                    <h6 className="card-title h6 mb-15">Camere e Suite</h6>
                                                </Link>
                                                <p className="card-text">
                                                    Tipologie varie di camere, dalle standard alle suite di lusso,
                                                    dotate di tutti i comfort essenziali come letti.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/security.svg" alt="" />
                                                </div>
                                                <Link to="#">
                                                    <h6 className="card-title h6 mb-15">Sicurezza 24 Ore</h6>
                                                </Link>
                                                <p className="card-text">
                                                    Personale di sicurezza in loco e sistemi di sorveglianza avanzati.
                                                    Deposito sicuro per oggetti di valore.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/swimming-pool.svg" alt="" />
                                                </div>
                                                <Link to="#">
                                                    <h6 className="card-title h6 mb-15">Piscina</h6>
                                                </Link>
                                                <p className="card-text">
                                                    Piscine interne o esterne per relax o esercizio fisico.
                                                    Offriamo anche massaggi, trattamenti viso e altri servizi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="facility__image jara-mask-3 jarallax">
                                <img
                                    height={765}
                                    width={605}
                                    className="jarallax-img"
                                    src="/assets/images/index-3/facility.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine strutture */}
        </>
    )
}

export default FacilitiesSeven
