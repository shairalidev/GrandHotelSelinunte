import React, { useEffect } from 'react';
import WOW from 'wowjs'; 

function BannerThree() {
    useEffect(() => {
            new WOW.WOW().init();
        }, []);
    return (
        <>
            {/* area banner */}
            <div className="rts__section banner__area is__home__two banner__height banner__center">
                <div className="banner__content">
                    <div className="banner__slider__image">
                        <img src="/assets/images/banner/slides-2.webp" alt="" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="banner__slide__content">
                                    <h1 className="wow fadeInUp">
                                        Soggiorno di Lusso: Comfort &amp; Eleganza Garantiti
                                    </h1>
                                    <div className="banner__slide__content__info">
                                        <div className="item wow fadeInUp" data-wow-delay=".3s">
                                            <span className="h2 d-block">30+</span>
                                            <p>Camere d'Hotel</p>
                                        </div>
                                        <div className="item wow fadeInUp" data-wow-delay=".5s">
                                            <span className="h2 d-block">20+</span>
                                            <p>Centro Piscine &amp; Spa</p>
                                        </div>
                                        <div className="item wow fadeInUp" data-wow-delay=".7s">
                                            <span className="h2 d-block">50+</span>
                                            <p>Staff Esperto</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine area banner */}
        </>
    )
}

export default BannerThree
