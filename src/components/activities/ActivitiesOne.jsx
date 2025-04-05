import React, { useEffect } from 'react'
import { jarallax } from 'jarallax';
import WOW from 'wowjs';
import { Link } from 'react-router-dom'

function ActivitiesOne() {
    useEffect(() => {
        new WOW.WOW().init();
        function isMobileDevice() {
            return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        if (!isMobileDevice()) {
            document.querySelectorAll('.jarallax').forEach(element => {
                jarallax(element, {});
            });
        } else {
            console.log('Jarallax skipped on mobile devices');
        }
    }, []);
    
    return (
        <>
            {/* Le nostre attività */}
            <div className="rts__section activites section__padding">
                <div className="container">
                    <div className="row">
                        {/* singola attività */}
                        <div className="single__service__item if__is__default if__activities">
                            <div className="service__thumb jarallax">
                                <img
                                    className="jarallax-img"
                                    src="/assets/images/pages/activities/1.webp"
                                    width={605}
                                    height={650}
                                    alt="Attività invernali"
                                />
                            </div>
                            <div className="service__content">
                                <div className="section__content__left">
                                    <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                        Attività Invernali
                                    </span>
                                    <h2 className="content__title h2 wow fadeInUp lh-1">
                                        Attività Invernali
                                    </h2>
                                </div>
                                <p className="font-sm mt-20 wow fadeInUp">
                                    Approfitta delle piste vicine, perfette sia per principianti che per sciatori esperti. Esplora paesaggi invernali tranquilli con tour guidati con racchette da neve sui sentieri nei dintorni.
                                </p>
                                <div className="activity__feature wow fadeInUp mt-20">
                                    <ul className="list-unstyled">
                                        <li>
                                            <img src="/assets/images/icon/sketing.svg" alt="Sci e Snowboard" />
                                            Sci e Snowboard
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/wild.svg" alt="Tour della fauna invernale" />
                                            Tour della Fauna Invernale
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/hot-coffe.svg" alt="Cioccolata calda al caminetto" />
                                            Cioccolata Calda al Caminetto
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/snow.svg" alt="Escursioni con le ciaspole" />
                                            Escursioni con le Ciaspole
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/spa.svg" alt="Spa e benessere" />
                                            Spa e Benessere
                                        </li>
                                    </ul>
                                </div>
                                <Link
                                    to="/winter-activities"
                                    className="underline__style wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    Scopri di più
                                </Link>
                            </div>
                        </div>
                        {/* singola attività fine */}
                        {/* singola attività */}
                        <div className="single__service__item if__is__reverse if__activities">
                            <div className="service__thumb jarallax">
                                <img
                                    className="jarallax-img"
                                    src="/assets/images/pages/activities/2.webp"
                                    width={605}
                                    height={650}
                                    alt="Attività estive"
                                />
                            </div>
                            <div className="service__content">
                                <div className="section__content__left">
                                    <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                        Attività Estive
                                    </span>
                                    <h2 className="content__title h2 wow fadeInUp lh-1">
                                        Attività Estive
                                    </h2>
                                </div>
                                <p className="font-sm mt-20 wow fadeInUp">
                                    Vivi l’estate con escursioni guidate, paesaggi mozzafiato e attività all’aperto per tutti i gusti.
                                </p>
                                <div className="activity__feature wow fadeInUp mt-20">
                                    <ul className="list-unstyled">
                                        <li>
                                            <img src="/assets/images/icon/sketing.svg" alt="Escursioni guidate" />
                                            Escursioni Guidate
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/biking.svg" alt="Mountain Bike" />
                                            Mountain Bike
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/swimming.svg" alt="Piscina all'aperto" />
                                            Piscina all’Aperto
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/home-theater.svg" alt="Cinema all’aperto" />
                                            Cinema all’Aperto
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/tenis.svg" alt="Campi da tennis e sportivi" />
                                            Campi da Tennis e Sportivi
                                        </li>
                                    </ul>
                                </div>
                                <Link
                                    to="/summer-activities"
                                    className="underline__style wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    Scopri di più
                                </Link>
                            </div>
                        </div>
                        {/* singola attività fine */}
                    </div>
                </div>
                <div className="container pt-120">
                    <div className="row g-30">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="activities__image__card">
                                <div className="activities__thumb">
                                    <img
                                        src="/assets/images/pages/activities/3.webp"
                                        width={420}
                                        height={585}
                                        alt="Tour culturali"
                                    />
                                </div>
                                <div className="activities__meta">
                                    <Link to="/cultural-tours" className="h4 title d-block">
                                        Tour Culturali
                                    </Link>
                                    <Link to="/cultural-tours" className="theme-btn btn-style border">
                                        <span>Scopri di più</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="activities__image__card">
                                <div className="activities__thumb">
                                    <img
                                        src="/assets/images/pages/activities/4.webp"
                                        width={420}
                                        height={585}
                                        alt="Tour culturali"
                                    />
                                </div>
                                <div className="activities__meta">
                                    <Link to="/cultural-tours" className="h4 title d-block">
                                        Tour Culturali
                                    </Link>
                                    <Link to="/cultural-tours" className="theme-btn btn-style border">
                                        <span>Scopri di più</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="activities__image__card">
                                <div className="activities__thumb">
                                    <img
                                        src="/assets/images/pages/activities/5.webp"
                                        width={420}
                                        height={585}
                                        alt="Tour culturali"
                                    />
                                </div>
                                <div className="activities__meta">
                                    <Link to="/cultural-tours" className="h4 title d-block">
                                        Tour Culturali
                                    </Link>
                                    <Link to="/cultural-tours" className="theme-btn btn-style border">
                                        <span>Scopri di più</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fine attività */}
        </>
    )
}

export default ActivitiesOne;
