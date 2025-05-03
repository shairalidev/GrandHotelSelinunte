import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function TestimonialThree({ className }) {
    return (
        <>
            {/* client testimonial */}
            <div className={`rts__section client__testimonial has__background has__shape py-90 ${className}`}>
                <div className="section__shape">
                    <img src="/assets/images/shape/testimonial__two.png" alt="" />
                    <div className="shape__two">
                        <img src="/assets/images/shape/testimonial__two-2.png" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp">
                            <div className="section__topbar is__home__two">
                                <span className="h6 subtitle__icon__three mx-auto text-white">
                                    Testimonianze
                                </span>
                                <h2 className="section__title text-white">Cosa Dicono i Nostri Clienti</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative justify-content-center ">
                        <div className="col-lg-10">
                            <Swiper
                                className="testimonial__slider overflow-hidden wow fadeInUp" data-wow-delay=".3s"
                                modules={[Navigation]}
                                direction="horizontal"
                                slidesPerView={1}
                                spaceBetween={0}
                                loop={true}
                                centeredSlides={true}
                                autoplay="false"
                                navigation={{
                                    nextEl: ".slider-button-next",
                                    prevEl: ".slider-button-prev",
                                }}
                                speed={1000}
                                effect="slide"
                            >
                                <div className="swiper-wrapper">
                                    {/* single slider item */}
                                    <SwiperSlide>
                                        <div className="single__slider__item is__home ">
                                            <div className="slider__rating mb-30">
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star " />
                                            </div>
                                            <span className="slider__text d-block">
                                            Ottima esperienza, abbiamo trascorso questi tre giorni di pasqua e ci siamo trovati benissimo.
                         L hotel è molto carino l animazione molto bravi sia i piccoli Ke noi grandi ci siamo divertiti.
                          I ragazzi del bar davvero molto gentili il cibo ottimo.torneremo presto
                                                </span>
                                            <div className="slider__author__info">
                                                <div className="slider__author__info__image">
                                                    <img src="/assets/images/author/user.png" alt="" />
                                                </div>
                                                <div className="slider__author__info__content">
                                                    <h6 className="mb-0">Denise Paparone</h6>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* single slider item end */}
                                    <SwiperSlide>
                                        <div className="single__slider__item is__home ">
                                            <div className="slider__rating mb-30">
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star " />
                                            </div>
                                            <span className="slider__text d-block">
                                            Io e mio padre siamo ospiti fissi di questo meraviglioso hotel, che anno dopo anno, migliora sempre di più.
                          Un grande abbraccio a tutto lo staff,
                          Cucina strepitosa e buonissima.
                          In particolare grazie ai ragazzi dell'animazione e, ai baristi super professionali e sorridenti, sono l'arma in più.
                      
                                            </span>
                                            <div className="slider__author__info">
                                                <div className="slider__author__info__image">
                                                    <img src="/assets/images/author/user.png" alt="" />
                                                </div>
                                                <div className="slider__author__info__content">
                                                    <h6 className="mb-0">Giuseppe Monteleone</h6>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single__slider__item is__home ">
                                            <div className="slider__rating mb-30">
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star " />
                                            </div>
                                            <span className="slider__text d-block">
                                            Una bellissima esperienza buono il servizio è anche il cibo sono buoni di molte varietà e anche per celiaci veramente cortesi e poi ottimo l'intrattenimento un ragazzo eccezionale di nome vinzent. E brave le animatrici complimenti
                                            </span>
                                            <div className="slider__author__info">
                                                <div className="slider__author__info__image">
                                                    <img src="/assets/images/author/user.png" alt="" />
                                                </div>
                                                <div className="slider__author__info__content">
                                                    <h6 className="mb-0">Ivana Occhipinti</h6>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="single__slider__item is__home ">
                                            <div className="slider__rating mb-30">
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star " />
                                            </div>
                                            <span className="slider__text d-block">
                                            Ci sono andato per far visita e ho trovato pulizia, ho dormito bene, ho mangiato bene e ho scoperto che tutti mi rispettavano molto. </span>
                                            <div className="slider__author__info">
                                                <div className="slider__author__info__image">
                                                    <img src="/assets/images/author/user.png" alt="" />
                                                </div>
                                                <div className="slider__author__info__content">
                                                    <h6 className="mb-0">Muhammad Jabbar Khan</h6>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>


                                    <SwiperSlide>
                                        <div className="single__slider__item is__home ">
                                            <div className="slider__rating mb-30">
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star " />
                                            </div>
                                            <span className="slider__text d-block">
                                            Posto da consigliare, adatto alle famiglia. Servizi ottimi e animazione Kama Club fantastica!! (Dennis, Carla, Giada, Aura). Ottimi anche i ragazzi del bar Mike e Rachele. Ottima vacanza!! </span>
                                            <div className="slider__author__info">
                                                <div className="slider__author__info__image">
                                                    <img src="/assets/images/author/user.png" alt="" />
                                                </div>
                                                <div className="slider__author__info__content">
                                                    <h6 className="mb-0">Maria</h6>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="single__slider__item is__home ">
                                            <div className="slider__rating mb-30">
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star " />
                                            </div>
                                            <span className="slider__text d-block">
                                            Esperienza fantastica!
                                            Un grazie alla KAMA CLUB.
                                            Dennis, Mike, Rachele, Carla, Aura, Giada.
                                            Ristorante super.
                                            Complimenti alla cucina e alla reception.
                                            Camere pulite e piscina perfetta.
                                            </span>
                                            <div className="slider__author__info">
                                                <div className="slider__author__info__image">
                                                    <img src="/assets/images/author/user.png" alt="" />
                                                </div>
                                                <div className="slider__author__info__content">
                                                    <h6 className="mb-0">Carmelo Gulino</h6>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="single__slider__item is__home ">
                                            <div className="slider__rating mb-30">
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star" />
                                                <i className="flaticon-star " />
                                            </div>
                                            <span className="slider__text d-block">
                                            Magari le stanze e il bar avrebbero bisogno di un ammodernamento, ma il personale è gentile e disponibile, la cucina molto buona, pronti e veloci a risolvere qualsiasi richiesta e/o problema. Le bimbe hanno passato un ottimo carnevale con un'animazione super. Nessuno è perfetto, ma ci siamo comunque trovati bene, per cui 5 stelle se le merita.
                                            </span>
                                            <div className="slider__author__info">
                                                <div className="slider__author__info__image">
                                                    <img src="/assets/images/author/user.png" alt="" />
                                                </div>
                                                <div className="slider__author__info__content">
                                                    <h6 className="mb-0">tatanka72</h6>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </div>
                            </Swiper>
                        </div>
                        <div className="full__width__nav">
                            <div className="rts__slide">
                                <div className="next slider-button-prev">
                                    {/* SVG */}
                                </div>
                            </div>
                            <div className="rts__slide">
                                <div className="prev slider-button-next">
                                    {/* SVG */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* client testimonial end */}
        </>
    )
}

export default TestimonialThree
