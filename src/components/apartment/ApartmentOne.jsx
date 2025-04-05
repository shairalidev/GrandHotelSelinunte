import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Stili principali di Swiper
import { Pagination } from 'swiper/modules';
// Importa gli stili di Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

function ApartmentOne() {
    return (
        <>
            {/* i nostri appartamenti */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__four mx-auto">Appartamento</span>
                                <h2 className="section__title mb-20">I Nostri Appartamenti</h2>
                                <span className="font-sm">
                                    Le nostre camere offrono un'armoniosa combinazione di comfort ed eleganza,
                                    progettate per offrire un soggiorno eccezionale a ogni ospite. Ogni camera
                                    è dotata di letti confortevoli.
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* fine riga */}
                </div>
                <div className="full__width">
                    <Swiper
                        className="apartment__slider overflow-hidden wow fadeInUp" data-wow-delay=".5s"
                        modules={[Pagination]}
                        direction="horizontal"
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        autoplay="false"
                        pagination={{
                            el: ".rts-pagination",
                            clickable: true,
                        }}
                        speed={1000}
                        effect="slide"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                centeredSlides: false
                            },
                            768: {
                                slidesPerView: 2.1,
                            },
                            1200: {
                                slidesPerView: 3,
                            }
                        }}
                    >
                        <div className="swiper-wrapper">
                            {/* singolo slide appartamento */}
                            <SwiperSlide>
                                <div className="apartment__slide__box">
                                    <div className="apartment__slide__image">
                                        <img
                                            height={500}
                                            width={610}
                                            src="/assets/images/index-3/apartment/1.webp"
                                            alt="appartamento"
                                        />
                                    </div>
                                    <div className="apartment__slide__content">
                                        <div className="slider__meta">
                                            <Link to="/room/2" className="apartment__title">
                                                <h5>Appartamento Elegante</h5>
                                            </Link>
                                            <div className="apartment__content__meta">
                                                <span>
                                                    <i className="flaticon-construction" />
                                                    35 mq
                                                </span>
                                                <span>
                                                    <i className="flaticon-user" />5 Persone
                                                </span>
                                            </div>
                                        </div>
                                        <span className="price h4">200€</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* fine slide appartamento */}
                            {/* singolo slide appartamento */}
                            <SwiperSlide>
                                <div className="apartment__slide__box">
                                    <div className="apartment__slide__image">
                                        <img
                                            height={500}
                                            width={610}
                                            src="/assets/images/index-3/apartment/2.webp"
                                            alt="appartamento"
                                        />
                                    </div>
                                    <div className="apartment__slide__content">
                                        <div className="slider__meta">
                                            <Link to="/room/2" className="apartment__title">
                                                <h5>Appartamento Elegante</h5>
                                            </Link>
                                            <div className="apartment__content__meta">
                                                <span>
                                                    <i className="flaticon-construction" />
                                                    35 mq
                                                </span>
                                                <span>
                                                    <i className="flaticon-user" />5 Persone
                                                </span>
                                            </div>
                                        </div>
                                        <span className="price h4">200€</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* fine slide appartamento */}
                            {/* singolo slide appartamento */}
                            <SwiperSlide>
                                <div className="apartment__slide__box">
                                    <div className="apartment__slide__image">
                                        <img
                                            height={500}
                                            width={610}
                                            src="/assets/images/index-3/apartment/3.webp"
                                            alt="appartamento"
                                        />
                                    </div>
                                    <div className="apartment__slide__content">
                                        <div className="slider__meta">
                                            <Link to="/room/2" className="apartment__title">
                                                <h5>Appartamento Elegante</h5>
                                            </Link>
                                            <div className="apartment__content__meta">
                                                <span>
                                                    <i className="flaticon-construction" />
                                                    35 mq
                                                </span>
                                                <span>
                                                    <i className="flaticon-user" />5 Persone
                                                </span>
                                            </div>
                                        </div>
                                        <span className="price h4">200€</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* fine slide appartamento */}
                            {/* singolo slide appartamento */}
                            <SwiperSlide>
                                <div className="apartment__slide__box">
                                    <div className="apartment__slide__image">
                                        <img
                                            height={500}
                                            width={610}
                                            src="/assets/images/index-3/apartment/4.webp"
                                            alt="appartamento"
                                        />
                                    </div>
                                    <div className="apartment__slide__content">
                                        <div className="slider__meta">
                                            <Link to="/room/2" className="apartment__title">
                                                <h5>Appartamento Elegante</h5>
                                            </Link>
                                            <div className="apartment__content__meta">
                                                <span>
                                                    <i className="flaticon-construction" />
                                                    35 mq
                                                </span>
                                                <span>
                                                    <i className="flaticon-user" />5 Persone
                                                </span>
                                            </div>
                                        </div>
                                        <span className="price h4">200€</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* fine slide appartamento */}
                        </div>
                        {/* pulsante paginazione */}
                        <div className="rts__pagination">
                            <div className="rts-pagination" />
                        </div>
                        {/* fine paginazione */}
                    </Swiper>
                </div>
            </div>
            {/* fine sezione appartamenti */}
        </>
    )
}

export default ApartmentOne;
