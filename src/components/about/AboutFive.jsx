import React from 'react'

function AboutFive() {
    return (
        <>
            {/* about us */}
            <div className="rts__section section__padding about is__home__five has__background">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                        <div className="section__topbar">
                            <span className="h6 subtitle__icon__three mx-auto">Chi Siamo</span>
                            <h2 className="section__title">
                                Benvenuti al nostro Grand Hotel Selinunte &amp; Resort
                            </h2>
                        </div>

                            <p
                                className="font-sm d-block mt-30 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                Benvenuti in Italia, dove il lusso incontra il comfort nel cuore di Marinella. 
                                Da sempre ci dedichiamo a offrire un soggiorno eccezionale ai nostri ospiti, 
                                unendo servizi moderni a un’eleganza senza tempo. Le nostre camere e suite, 
                                splendidamente arredate, offrono viste mozzafiato e sistemazioni raffinate, 
                                garantendo un rifugio rilassante sia per viaggi di lavoro che di piacere.
                            </p>
                            <img
                                src="/assets/images/index-5/sign.webp"
                                className="mt-20"
                                width={110}
                                height={75}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="about__positioned__images">
                        <div className="image__1 wow fadeInLeft " data-wow-delay=".5s">
                            <img
                                src="/assets/images/index-5/about/1.webp"
                                height={595}
                                width={825}
                                alt=""
                            />
                        </div>
                        <div className="image__2 wow fadeInUp jarallax" data-wow-delay=".6s">
                            <img
                                className="jarallax-img"
                                src="/assets/images/index-5/about/2.webp"
                                width={385}
                                height={530}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__padding mb-100 d-none d-lg-block" />
            <div className="pb-100 d-none d-lg-block" />
            {/* about us end */}
        </>

    )
}

export default AboutFive