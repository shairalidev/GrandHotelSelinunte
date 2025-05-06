import React from 'react';
import { Link } from 'react-router-dom';

function ServiceFive() {
  return (
    <>
      {/* service */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row">
            <div className="service__list">
              {/* single service item */}
              <div className="service__item">
                <div className="service__item__icon">
                  <i className="flaticon-24-hours" />
                </div>
                <Link href="#" className="h6">
                  Sicurezza 24 Ore
                </Link>
                <p>
                  Un servizio di sicurezza attivo 24 ore su 24 garantisce sorveglianza continua di persone, strutture o informazioni sensibili.
                </p>
              </div>
              {/* single service item end */}

              {/* single service item */}
              <div className="service__item">
                <div className="service__item__icon">
                  <i className="flaticon-wifi" />
                </div>
                <Link href="#" className="h6">
                  Wi‑Fi Gratuito
                </Link>
                <p>
                  Il Wi‑Fi gratuito è ormai un servizio essenziale in un mondo sempre più connesso, consentendo a tutti di accedere a Internet in qualsiasi momento.
                </p>
              </div>
              {/* single service item end */}

              

              {/* single service item */}
              <div className="service__item">
                <div className="service__item__icon">
                  <i className="flaticon-plane" />
                </div>
                <Link href="#" className="h6">
                  Transfer Aeroportuale
                </Link>
                <p>
                  Il servizio di transfer da e per l’aeroporto è fondamentale per garantire un’esperienza di viaggio senza intoppi, includendo taxi e ride‑sharing.
                </p>
              </div>
              {/* single service item end */}

              {/* single service item */}
              <div className="service__item">
                <div className="service__item__icon">
                  <img
                    src="/assets/images/icon/desk.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <Link href="#" className="h6">
                  Scrivania da Lavoro
                </Link>
                <p>
                  Una scrivania ben organizzata è molto più di un semplice posto dove svolgere compiti: è un centro di produttività e creatività.
                </p>
              </div>
              {/* single service item end */}

              {/* single service item */}
              <div className="service__item">
                <div className="service__item__icon">
                  <i className="flaticon-swimming" />
                </div>
                <Link href="#" className="h6">
                  Piscina
                </Link>
                <p>
                  La piscina è un’oasi rinfrescante dove potersi rilassare, rinfrescarsi e godere di svariate attività acquatiche.
                </p>
              </div>
              {/* single service item end */}

              {/* single service item */}
              <div className="service__item">
                <div className="service__item__icon">
                  <img
                    src="/assets/images/icon/bed.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <Link href="#" className="h6">
                  Camere
                </Link>
                <p>
                  Dalle camere standard alle di lusso, offriamo personale di sicurezza in loco, videosorveglianza e cassaforte per i vostri beni di valore.
                </p>
              </div>
              {/* single service item end */}

              {/* single service item */}
              <div className="service__item">
                <div className="service__item__icon">
                  <i className="flaticon-shower" />
                </div>
                <Link href="#" className="h6">
                  Doccia
                </Link>
                <p>
                L'acqua calda scorre costantemente, offrendoti comfort e relax immediati dopo un lungo viaggio. In quell'acqua, ogni muscolo si rilassa e ti prepari per la giornata.
                </p>
              </div>
              {/* single service item end */}
            </div>
          </div>
        </div>
      </div>
      {/* service end */}
    </>
  );
}

export default ServiceFive;
