import React from 'react'
import { Link } from 'react-router-dom'

function AboutSeven() {
    return (
        <>
            {/* about us */}
            <div className="rts__section about is__resturant section__padding">
                <div className="container">
                    <div className="row g-4 align-items-center  ">
                        <div className="col-lg-5">
                            <div className="about__images">
                                <div className="image__left wow fadeInUp">
                                    <img
                                        height={648}
                                        width={428}
                                        src="/assets/images/pages/resturant/1.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="image__right wow fadeInUp">
                                    <img
                                        width={428}
                                        height={648}
                                        src="/assets/images/pages/resturant/2.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about__content">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    Hotel Experience
                                </span>
                                <h2 className="font-xl wow fadeInUp">
                                Benvenuti al nostro Grand Hotel Selinunte &amp; Resort
                                </h2>
                                <p className="font-sm mt-30 wow fadeInUp" data-wow-delay=".3s">
                                Benvenuti in Italia, dove il lusso incontra il comfort nel cuore di Marinella. 
                                Da sempre ci dedichiamo a offrire un soggiorno eccezionale ai nostri ospiti, 
                                unendo servizi moderni a un’eleganza senza tempo. Le nostre camere e suite, 
                                splendidamente arredate, offrono viste mozzafiato e sistemazioni raffinate, 
                                garantendo un rifugio rilassante sia per viaggi di lavoro che di piacere.
                                </p>
                                <div className="reservation__meta wow fadeInUp">
                                    <div className="reservation__item">
                                        <p className="font-sm">Reservation By Phone</p>
                                        <Link to="tel:+393288170176">
                                            <img src="/assets/images/icon/phone.svg" alt="" /> +393288170176
                                        </Link>
                                    </div>
                                    <div className="reservation__item">
                                        <p className="font-sm">Opening Hours</p>
                                        <span>
                                            <img src="/assets/images/icon/clock.svg" alt="" />
                                            10 Am - 12Pm
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us end */}
        </>

    )
}

export default AboutSeven