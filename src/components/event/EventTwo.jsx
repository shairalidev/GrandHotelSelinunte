import React, { useEffect } from 'react';
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
                                    Eventi Speciali sulla Terrazza Panoramica
                                </h2>
                                <p className="font-sm wow fadeInUp">
                                    Durante il soggiorno al Grand Hotel Selinunte, gli ospiti possono godere di attività di animazione per adulti e bambini, come giochi, spettacoli e momenti di relax. Inoltre, offriamo la possibilità di organizzare eventi privati e celebrazioni speciali sulla nostra terrazza panoramica vista mare, ideale per matrimoni, aperitivi, spettacoli e altre occasioni. 
                                </p>
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
                                    Family Fun: Miniclub e Attività per Bambini
                                </h2>
                                <p className="font-sm wow fadeInUp">
                                    Al Grand Hotel Selinunte, i più piccoli possono divertirsi con il nostro miniclub, giochi all’aperto, baby dance, e spettacoli teatrali. I genitori, nel frattempo, possono godersi la piscina, la spiaggia attrezzata, e il relax in uno dei nostri spazi comuni. Ogni attività è pensata per offrire intrattenimento sicuro e divertente per tutta la famiglia.
                                </p>
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
