import React from 'react'

function AboutSix() {
    return (
        <>
            {/* about us */}
            <div className="rts__section about is__home__six has__background">
                <div className="container">
                    <div className="row about__content">
                        <div className="col-lg-5">
                            <div className="about__image">
                                <img
                                    height={730}
                                    width={850}
                                    src="/assets/images/index-6/about.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about__content__full">
                                <div className="section__topbar">
                                    <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                                        About US
                                    </span>
                                    <h2 className="content__title h2 lh-1 wow fadeInUp">
                                    Benvenuti al nostro Grand Hotel Selinunte &amp; Resort
                                    </h2>
                                </div>
                                <p className="font-sm mt-30 mb-40">
                                Benvenuti in Italia, dove il lusso incontra il comfort nel cuore di Marinella. 
                                Da sempre ci dedichiamo a offrire un soggiorno eccezionale ai nostri ospiti, 
                                unendo servizi moderni a un’eleganza senza tempo. Le nostre camere e suite, 
                                splendidamente arredate, offrono viste mozzafiato e sistemazioni raffinate, 
                                garantendo un rifugio rilassante sia per viaggi di lavoro che di piacere.
                                </p>
                                <img
                                    height={75}
                                    width={110}
                                    src="/assets/images/index-5/sign.webp"
                                    alt=""
                                    className="signature"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us end */}
        </>

    )
}

export default AboutSix