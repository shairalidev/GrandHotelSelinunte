import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import the JSON array
import reviews from '../data/reviews.json';

function TestimonialOne() {
  return (
    <>
      {/* sezione testimonianze */}
      <div className="rts__section section__padding testimonial has__shape">
        <div className="container">
          <div className="row mb-40">
            <div className="d-flex align-items-center justify-content-between position-relative">
              <div className="section__content__left">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                  Testimonianze
                </span>
                <h2 className="content__title h2 lh-1">
                  Cosa Dicono i Nostri Clienti
                </h2>
              </div>
              <div className="slider__navigation">
                <div className="nav__btn button-next">
                  <img src="/assets/images/icon/arrow-left-short.svg" alt="Next" />
                </div>
                <div className="nav__btn button-prev">
                  <img src="/assets/images/icon/arrow-right-short.svg" alt="Prev" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-11">
            <Swiper
                  className="testimonial__slider overflow-hidden"
                  modules={[Navigation]}
                  direction="horizontal"
                  slidesPerView={1}
                  loop={false}
                  centeredSlides={true}
                  autoplay={{ delay: 5000 }}
                  navigation={{
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                  }}
                  speed={1000}
                  effect="slide"
                  autoHeight={true} // ✅ ADD THIS
                >

                {reviews.map((rev, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="testimonial__item__content">
                      <div className="author__icon">
                        <img
                          src="/assets/images/author/user.png"
                          alt={rev.name}
                        />
                      </div>
                      <div className="testimonial__content">
                        <div className="single__slider__item">
                          <div className="slider__rating mb-20">
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
                            <div className="slider__author__info__content">
                              <h6 className="mb-0">{rev.name}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* fine sezione testimonianze */}
    </>
  );
}

export default TestimonialOne;
