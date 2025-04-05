import React, {useEffect} from 'react'
import WOW from 'wowjs';

function EventTwo() {
    useEffect(() => {
            new WOW.WOW().init();
        }, []);
    return (
        <>
            {/* event area */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row">
                        <div className="single__event if__is__default">
                            <div className="single__event__thumb">
                                <img
                                    src="/assets/images/pages/event/1.webp"
                                    width={605}
                                    height={535}
                                    alt=""
                                />
                            </div>
                            <div className="single__event__meta">
                                <h2 className="wow fadeInUp mb-20">
                                    Una Notte di Speranza: Il Nostro Gala di Beneficenza.
                                </h2>
                                <p className="font-sm wow fadeInUp">
                                    Nei nostri Servizi di Fitness &amp; Yoga, siamo dedicati ad aiutarti
                                    a raggiungere i tuoi obiettivi di salute e benessere. Il nostro programma
                                    completo offre una varietà di classi adatte a tutti i livelli,
                                    dai principianti ai praticanti esperti.
                                </p>
                                <div className="event__info mt-20 wow fadeInUp">
                                    <div className="event__info__single">
                                        <span className="h5 d-block">1000+</span>
                                        <p>Cena per Ospiti</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">100+</span>
                                        <p>Staff di Servizio</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">10+</span>
                                        <p>Stanze Speciali</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single__event if__is__reverse">
                            <div className="single__event__thumb">
                                <img
                                    src="/assets/images/pages/event/2.webp"
                                    width={605}
                                    height={535}
                                    alt=""
                                />
                            </div>
                            <div className="single__event__meta">
                                <h2 className="wow fadeInUp mb-20">
                                    Gusto di Lusso: Evento Festival di Cibo &amp; Vino
                                </h2>
                                <p className="font-sm wow fadeInUp">
                                    Nei nostri Servizi di Fitness &amp; Yoga, siamo dedicati ad aiutarti
                                    a raggiungere i tuoi obiettivi di salute e benessere. Il nostro programma
                                    completo offre una varietà di classi adatte a tutti i livelli,
                                    dai principianti ai praticanti esperti.
                                </p>
                                <div className="event__info mt-20 wow fadeInUp">
                                    <div className="event__info__single">
                                        <span className="h5 d-block">800+</span>
                                        <p>Cena per Ospiti</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">70+</span>
                                        <p>Staff di Servizio</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">16+</span>
                                        <p>Stanze Speciali</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* event area end */}
        </>
    )
}

export default EventTwo
