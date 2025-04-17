import React from 'react';
import { Link } from 'react-router-dom';

function ServiceSix() {
  return (
    <>
      {/* servizi */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section__head text-center mb-40">
                <h2 className="section__title">Perché scegliere i nostri eventi</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="service__list">
              {/* singolo servizio */}
              <div className="service__item">
                <div className="service__item__icon">
                  <i className="flaticon-24-hours" />
                </div>
                <Link to="#" className="h6">
                  Sicurezza 24 Ore
                </Link>
                <p>
                  Un servizio di sicurezza attivo 24 ore su 24 garantisce sorveglianza
                  continua di persone, strutture e informazioni sensibili.
                </p>
              </div>
              {/* singolo servizio end */}

              {/* singolo servizio */}
              <div className="service__item">
                <div className="service__item__icon">
                  <i className="flaticon-wifi" />
                </div>
                <Link to="#" className="h6">
                  Wi‑Fi Gratuito
                </Link>
                <p>
                  Il Wi‑Fi gratuito è ormai un servizio essenziale in un mondo sempre più
                  connesso, permettendo a tutti di accedere a Internet in qualsiasi momento.
                </p>
              </div>
              {/* singolo servizio end */}

              {/* singolo servizio */}
              <div className="service__item">
                <div className="service__item__icon">
                  <img
                    height={40}
                    width={40}
                    src="/assets/images/icon/bed.svg"
                    alt=""
                  />
                </div>
                <Link to="#" className="h6">
                  Camere di Qualità
                </Link>
                <p>
                  Le nostre camere offrono un ambiente confortevole e curato,
                  progettato per garantire un soggiorno di alto livello.
                </p>
              </div>
              {/* singolo servizio end */}

              {/* singolo servizio */}
              <div className="service__item">
                <div className="service__item__icon">
                  <i className="flaticon-plane" />
                </div>
                <Link to="#" className="h6">
                  Transfer Aeroportuale
                </Link>
                <p>
                  Il servizio di transfer da e per l’aeroporto è fondamentale per
                  un viaggio senza intoppi, includendo taxi, ride‑sharing e altre soluzioni.
                </p>
              </div>
              {/* singolo servizio end */}
            </div>
          </div>
        </div>
      </div>
      {/* servizi end */}
    </>
  );
}

export default ServiceSix;
