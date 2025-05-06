import React from 'react'

function AboutFour() {
    return (
        <>
            {/* about us */}
            <div className="rts__section about is__home__four section__padding">
                <div className="container">
                    <div className="row g-4 align-items-center  ">
                        <div className="col-lg-5">
                            <div className="about__images">
                                <div className="image__left wow fadeInUp">
                                    <img
                                        height={474}
                                        width={450}
                                        src="/assets/images/about/about-1.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="image__right wow fadeInLeft">
                                    <img
                                        width={365}
                                        height={385}
                                        src="/assets/images/about/about-main3.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about__content">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                Chi Siamo
                                </span>
                                <h2 className="font-xl wow fadeInUp">
                                Benvenuti al nostro Grand Hotel Selinunte &amp; Resort
                                </h2>
                                <p className="font-sm mt-30 wow fadeInUp" data-wow-delay=".3s">
                                Benvenuti in Italia, dove il lusso incontra il comfort nel cuore di Marinella. 
                                Da sempre ci dedichiamo a offrire un soggiorno eccezionale ai nostri ospiti, 
                                unendo servizi moderni a un’eleganza senza tempo. Le nostre camere, 
                                splendidamente arredate, offrono viste mozzafiato e sistemazioni raffinate, 
                                garantendo un rifugio rilassante sia per viaggi di lavoro che di piacere.
                                </p>
                                <div
                                    className="hotel__owner__sign mt-40 wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <img src="/assets/images/index-4/about/sign.webp" alt="sign" />
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

export default AboutFour