import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import { Link } from 'react-router-dom';

function ServiceOne() {
  useEffect(() => {
    function isMobileDevice() {
      return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    }

    if (!isMobileDevice()) {
      document.querySelectorAll('.jarallax').forEach((element) => {
        jarallax(element, {});
      });
    } else {
      console.log('Jarallax skipped on mobile devices');
    }
  }, []);

  return (
    <>
      {/* nostri servizi */}
      <div className="rts__section service is__home__three has__background has__shape">
        <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
          <img src="/assets/images/index-3/service/sec-bg.svg" alt="" />
        </div>
        <div className="container">
          <div className="row mb-40">
            <div className="section__topbar">
              <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                I Nostri Servizi
              </span>
              <h2 className="content__title h2 lh-1 wow fadeInUp">
                Cosa Offriamo al Grand Hotel Selinunte
              </h2>
            </div>
          </div>
          <div className="row">
            {/* piscina e idromassaggio */}
            <div className="single__service__item if__is__default">
              <div className="service__thumb jarallax">
                <img
                  className="jarallax-img"
                  src="/assets/images/index-3/service/1.webp"
                  width={605}
                  height={535}
                  alt="piscina"
                />
              </div>
              <div className="service__content">
                <div className="section__topbar">
                  <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                    Piscina & Idromassaggio
                  </span>
                  <h2 className="content__title h3 lh-1 wow fadeInUp ">
                    Piscina all’aperto con zona bambini
                  </h2>
                </div>
                <p className="font-sm mt-30 wow fadeInUp">
                  Ampia piscina all'aperto con idromassaggio, area dedicata ai bambini,
                  lettini e gazebo per momenti di relax immersi nella natura.
                </p>
                <Link
                  to="#"
                  className="underline__style wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Scopri di più
                </Link>
              </div>
            </div>

            {/* spiaggia attrezzata */}
            <div className="single__service__item if__is__reverse">
              <div className="service__thumb jarallax">
                <img
                  className="jarallax-img"
                  src="/assets/images/index-3/service/2.webp"
                  width={605}
                  height={535}
                  alt="spiaggia"
                />
              </div>
              <div className="service__content">
                <div className="section__topbar">
                  <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                    Spiaggia & Navetta
                  </span>
                  <h2 className="content__title h3 lh-1 wow fadeInUp ">
                    Spiaggia attrezzata nella Riserva del Belice
                  </h2>
                </div>
                <p className="font-sm mt-30 wow fadeInUp">
                  Goditi la spiaggia privata immersa nella riserva naturale, raggiungibile
                  con servizio navetta gratuito. Ombrelloni, lettini e relax garantiti.
                </p>
                <Link
                  to="#"
                  className="underline__style wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Scopri di più
                </Link>
              </div>
            </div>

            {/* terrazza panoramica */}
            <div className="single__service__item if__is__default">
              <div className="service__thumb jarallax">
                <img
                  className="jarallax-img"
                  src="/assets/images/index-3/service/3.webp"
                  width={605}
                  height={535}
                  alt="terrazza"
                />
              </div>
              <div className="service__content">
                <div className="section__topbar">
                  <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                    Eventi & Relax
                  </span>
                  <h2 className="content__title h3 lh-1 wow fadeInUp ">
                    Terrazza panoramica coperta
                  </h2>
                </div>
                <p className="font-sm mt-30 wow fadeInUp">
                  Spazio perfetto per feste, aperitivi, serate musicali e spettacoli
                  d’animazione con vista mare mozzafiato.
                </p>
                <Link
                  to="#"
                  className="underline__style wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Scopri di più
                </Link>
              </div>
            </div>

            {/* miniclub bambini */}
            <div className="single__service__item if__is__reverse">
              <div className="service__thumb jarallax">
                <img
                  className="jarallax-img"
                  src="/assets/images/index-3/service/4.webp"
                  width={605}
                  height={535}
                  alt="miniclub"
                />
              </div>
              <div className="service__content">
                <div className="section__topbar">
                  <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                    Miniclub Bambini
                  </span>
                  <h2 className="content__title h3 lh-1 wow fadeInUp ">
                    Area giochi e animazione
                  </h2>
                </div>
                <p className="font-sm mt-30 wow fadeInUp">
                  Spazio sicuro e attrezzato per il divertimento dei più piccoli, con
                  animatori e attività pensate per ogni età.
                </p>
                <Link
                  to="#"
                  className="underline__style wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fine servizi */}
    </>
  );
}

export default ServiceOne;
