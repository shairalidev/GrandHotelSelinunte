import React, { useEffect } from 'react'
import WOW from 'wowjs';

function EventTwo() {
    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <>
            {/* area eventi */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row">
                        {/* evento terrazza panoramica */}
                        <div className="single__event if__is__default">
                            <div className="single__event__thumb">
                                <img
                                    src="/assets/images/pages/event/1.webp"
                                    width={605}
                                    height={535}
                                    alt="event terrazza"
                                />
                            </div>
                            <div className="single__event__meta">
                                <h2 className="wow fadeInUp mb-20">
                                    Serate in Terrazza: Musica dal Vivo & Aperitivi al Tramonto
                                </h2>
                                <p className="font-sm wow fadeInUp">
                                    Ogni settimana, il Grand Hotel Selinunte ospita eventi speciali sulla nostra terrazza panoramica vista mare:
                                    aperitivi al tramonto, musica dal vivo, animazione per tutta la famiglia e spettacoli sotto le stelle.
                                </p>
                                <div className="event__info mt-20 wow fadeInUp">
                                    <div className="event__info__single">
                                        <span className="h5 d-block">300+</span>
                                        <p>Ospiti a Evento</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">10+</span>
                                        <p>Serate Settimanali</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">15+</span>
                                        <p>Artisti & Musicisti</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* evento per famiglie e bambini */}
                        <div className="single__event if__is__reverse">
                            <div className="single__event__thumb">
                                <img
                                    src="/assets/images/pages/event/2.webp"
                                    width={605}
                                    height={535}
                                    alt="event bambini"
                                />
                            </div>
                            <div className="single__event__meta">
                                <h2 className="wow fadeInUp mb-20">
                                    Family Day: Giochi, Miniclub e Spettacoli per Bambini
                                </h2>
                                <p className="font-sm wow fadeInUp">
                                    Un'intera giornata dedicata ai più piccoli: attività di miniclub, baby dance, spettacoli teatrali e giochi all’aperto.
                                    Mentre i bambini si divertono in sicurezza, i genitori possono rilassarsi e godersi i servizi dell’hotel.
                                </p>
                                <div className="event__info mt-20 wow fadeInUp">
                                    <div className="event__info__single">
                                        <span className="h5 d-block">150+</span>
                                        <p>Bambini Coinvolti</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">20+</span>
                                        <p>Animatori</p>
                                    </div>
                                    <div className="event__info__single">
                                        <span className="h5 d-block">8+</span>
                                        <p>Attività Diverse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine area eventi */}
        </>
    );
}

export default EventTwo;
