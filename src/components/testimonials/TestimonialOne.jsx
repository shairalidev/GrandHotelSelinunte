import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

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
                spaceBetween={0}
                loop={true}
                centeredSlides={true}
                autoplay="false"
                navigation={{
                  nextEl: '.button-next',
                  prevEl: '.button-prev',
                }}
                speed={1000}
                effect="slide"
              >
                {/* Denise Paparone */}
                <SwiperSlide>
                  <div className="testimonial__item__content">
                    <div className="author__icon">
                      <img src="/assets/images/author/user.png" alt="Denise Paparone" />
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
                          Ottima esperienza, abbiamo trascorso questi tre giorni di pasqua e ci siamo trovati benissimo.
                          L'hotel è molto carino, l'animazione molto bravi sia i piccoli che noi grandi ci siamo divertiti.
                          I ragazzi del bar davvero molto gentili, il cibo ottimo. Torneremo presto.
                        </span>
                        <div className="slider__author__info">
                          <div className="slider__author__info__content">
                            <h6 className="mb-0">Denise Paparone</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Giuseppe Monteleone */}
                <SwiperSlide>
                  <div className="testimonial__item__content">
                    <div className="author__icon">
                      <img src="/assets/images/author/user.png" alt="Giuseppe Monteleone" />
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
                          Io e mio padre siamo ospiti fissi di questo meraviglioso hotel, che anno dopo anno migliora sempre di più.
                          Un grande abbraccio a tutto lo staff, cucina strepitosa e buonissima.
                          In particolare grazie ai ragazzi dell'animazione e ai baristi super professionali e sorridenti, sono l'arma in più.
                        </span>
                        <div className="slider__author__info">
                          <div className="slider__author__info__content">
                            <h6 className="mb-0">Giuseppe Monteleone</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Ivana Occhipinti */}
                <SwiperSlide>
                  <div className="testimonial__item__content">
                    <div className="author__icon">
                      <img src="/assets/images/author/user.png" alt="Ivana Occhipinti" />
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
                          Una bellissima esperienza: buono il servizio e il cibo, molte varietà e anche per celiaci veramente cortesi.
                          Ottimo l'intrattenimento con un ragazzo eccezionale di nome Vinzent. E brave le animatrici, complimenti.
                        </span>
                        <div className="slider__author__info">
                          <div className="slider__author__info__content">
                            <h6 className="mb-0">Ivana Occhipinti</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Muhammad Jabbar Khan */}
                <SwiperSlide>
                  <div className="testimonial__item__content">
                    <div className="author__icon">
                      <img src="/assets/images/author/user.png" alt="Muhammad Jabbar Khan" />
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
                          Ci sono andato per far visita e ho trovato pulizia, ho dormito bene, ho mangiato bene e ho scoperto che tutti mi rispettavano molto.
                        </span>
                        <div className="slider__author__info">
                          <div className="slider__author__info__content">
                            <h6 className="mb-0">Muhammad Jabbar Khan</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Maria */}
                <SwiperSlide>
                  <div className="testimonial__item__content">
                    <div className="author__icon">
                      <img src="/assets/images/author/user.png" alt="Maria" />
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
                          Posto da consigliare, adatto alle famiglia. Servizi ottimi e animazione Kama Club fantastica!!
                          Ottimi anche i ragazzi del bar Mike e Rachele. Ottima vacanza!!
                        </span>
                        <div className="slider__author__info">
                          <div className="slider__author__info__content">
                            <h6 className="mb-0">Maria</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Carmelo Gulino */}
                <SwiperSlide>
                  <div className="testimonial__item__content">
                    <div className="author__icon">
                      <img src="/assets/images/author/user.png" alt="Carmelo Gulino" />
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
                          Esperienza fantastica! Un grazie alla KAMA CLUB. Dennis, Mike, Rachele, Carla, Aura, Giada.
                          Ristorante super. Complimenti alla cucina e alla reception. Camere pulite e piscina perfetta.
                        </span>
                        <div className="slider__author__info">
                          <div className="slider__author__info__content">
                            <h6 className="mb-0">Carmelo Gulino</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* tatanka72 */}
                <SwiperSlide>
                  <div className="testimonial__item__content">
                    <div className="author__icon">
                      <img src="/assets/images/author/user.png" alt="tatanka72" />
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
                          Magari le stanze e il bar avrebbero bisogno di un ammodernamento, ma il personale è gentile e disponibile,
                          la cucina molto buona, pronti e veloci a risolvere qualsiasi richiesta e/o problema.
                          Le bimbe hanno passato un ottimo carnevale con un'animazione super. Nessuno è perfetto, ma ci siamo comunque trovati bene,
                          per cui 5 stelle se le merita.
                        </span>
                        <div className="slider__author__info">
                          <div className="slider__author__info__content">
                            <h6 className="mb-0">tatanka72</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
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
