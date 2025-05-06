import React from 'react'

function BannerVideo() {
    return (
        <>
            {/* area banner */}
            <div className="rts__section banner__area is__home__video banner__height banner__center">
                <div className="banner__video__section">
                    <div className="video__area">
                    <video
                        src="/assets/images/video/Moonlit.mp4"
                        autoPlay
                        loop
                        muted
                        />

                        <div className="video__area__overlay" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-10">
                                <div className="video__section__text">
                                    <div className="video__text__slider overflow-hidden">
                                        <div className="swiper-wrapper">
                                            {/* singolo slide */}
                                            <div className="swiper-slide">
                                                <div className="video__text__slider__item">
                                                    <h1 className="video__text__slider__title">
                                                    Comfort ed eleganza nel cuore di Selinunte
                                                    </h1>
                                                </div>
                                            </div>
                                            {/* fine slide */}
                                            {/* singolo slide */}
                                            <div className="swiper-slide">
                                                <div className="video__text__slider__item">
                                                    <h1 className="video__text__slider__title">
                                                        Un Rifugio Lussuoso: Comfort &amp; Eleganza ti Attendono
                                                    </h1>
                                                </div>
                                            </div>
                                            {/* fine slide */}
                                            {/* singolo slide */}
                                            <div className="swiper-slide">
                                                <div className="video__text__slider__item">
                                                    <h1 className="video__text__slider__title">
                                                        Eleva la Tua Esperienza: Lusso, Comfort ed Eleganza
                                                    </h1>
                                                </div>
                                            </div>
                                            {/* fine slide */}
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

export default BannerVideo
