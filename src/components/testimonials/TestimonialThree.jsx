import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import reviews from '../data/reviews.json';

function TestimonialThree({ className }) {
  return (
    <>
      {/* client testimonial */}
      <div
        className={`rts__section client__testimonial has__background has__shape py-90 ${className}`}
      >
        <div className="section__shape">
          <img
            src="/assets/images/shape/testimonial__two.png"
            alt=""
          />
          <div className="shape__two">
            <img
              src="/assets/images/shape/testimonial__two-2.png"
              alt=""
            />
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6 wow fadeInUp">
              <div className="section__topbar is__home__two">
                <span className="h6 subtitle__icon__three mx-auto text-white">
                  Testimonianze
                </span>
                <h2 className="section__title text-white">
                  Cosa Dicono i Nostri Clienti
                </h2>
              </div>
            </div>
          </div>

          <div className="row position-relative justify-content-center">
            <div className="col-lg-10">
              <Swiper
                className="testimonial__slider overflow-hidden wow fadeInUp"
                data-wow-delay=".3s"
                modules={[Navigation]}
                direction="horizontal"
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                autoplay={false}
                navigation={{
                  nextEl: '.slider-button-next',
                  prevEl: '.slider-button-prev',
                }}
                speed={1000}
                effect="slide"
              >
                {reviews.map((rev, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="single__slider__item is__home">
                      <div className="slider__rating mb-30">
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                      </div>
                      <span className="slider__text d-block">
                        {rev.text}
                      </span>
                      <div className="slider__author__info">
                        <div className="slider__author__info__image">
                          <img
                            src="/assets/images/author/user.png"
                            alt={rev.name}
                          />
                        </div>
                        <div className="slider__author__info__content">
                          <h6 className="mb-0">{rev.name}</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="full__width__nav">
              <div className="rts__slide">
                <div className="next slider-button-prev">
                  {/* SVG for Prev */}
                </div>
              </div>
              <div className="rts__slide">
                <div className="prev slider-button-next">
                  {/* SVG for Next */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* client testimonial end */}
    </>
  );
}

export default TestimonialThree;
