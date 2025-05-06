import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import WOW from 'wowjs';

function ActivitiesOne() {
    useEffect(() => {
        new WOW.WOW().init();
        function isMobileDevice() {
            return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        if (!isMobileDevice()) {
            document.querySelectorAll('.jarallax').forEach(element => {
                jarallax(element, {});
            });
        } else {
            console.log('Jarallax skipped on mobile devices');
        }
    }, []);
    
    return (
        <>
            {/* Le nostre attività */}
            <div className="rts__section activites section__padding">
                <div className="container">
                    <div className="row">
                        
                        {/* singola attività fine */}
                        {/* singola attività */}
                        <div className="single__service__item if__is__reverse if__activities">
                            <div className="service__thumb jarallax">
                                <img
                                    className="jarallax-img"
                                    src="/assets/images/pages/activities/2.webp"
                                    width={605}
                                    height={650}
                                    alt="Attività estive"
                                />
                            </div>
                            <div className="service__content">
                                <div className="section__content__left">
                                    <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                        Attività Estive
                                    </span>
                                    <h2 className="content__title h2 wow fadeInUp lh-1">
                                        Attività Estive
                                    </h2>
                                </div>
                                <p className="font-sm mt-20 wow fadeInUp">
                                    Vivi l’estate con escursioni guidate, paesaggi mozzafiato e attività all’aperto per tutti i gusti.
                                    Sia che tu voglia rilassarti o divertirti, le nostre attività estive sono pensate per ogni esigenza.
                                </p>
                                <div className="activity__feature wow fadeInUp mt-20">
                                    <ul className="list-unstyled">
                                        <li>
                                            <img src="/assets/images/icon/swimming.svg" alt="Piscina all'aperto" />
                                            Piscina all’Aperto
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/home-theater.svg" alt="Teatro all’aperto" />
                                            Teatro all'Aperto
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/tenis.svg" alt="Campo da calcio" />
                                            Campo da Calcio
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/tenis.svg" alt="Campi da paddle" />
                                            Campi da Paddle (Esterni e Interni)
                                        </li>
                                    </ul>
                                </div>
                              
                            </div>
                        </div>
                        {/* singola attività fine */}
                    </div>
                </div>

                {/* Nuove attività - Sezione Selinpadel */}
                <div className="container pt-120">
                    <div className="row">
                        {/* First Selinpadel Section - Image Left, Text Right */}
                        <div className="col-xl-12">
                            <div className="single__service__item if__activities">
                                <div className="service__thumb jarallax">
                                    <img
                                        className="jarallax-img"
                                        src="/assets/images/pages/activities/selinpadel1.webp" // Replace with the actual image you provide
                                        width={605}
                                        height={650}
                                        alt="Selinpadel"
                                    />
                                </div>
                                <div className="service__content">
                                    <div className="section__content__left">
                                        <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                            Selinpadel - Campi da Paddle
                                        </span>
                                        <h2 className="content__title h2 wow fadeInUp lh-1">
                                            Campi da Paddle Esterni e Interni
                                        </h2>
                                    </div>
                                    <p className="font-sm mt-20 wow fadeInUp">
                                        Esattamente di fronte al nostro hotel, è nata una nuova realtà chiamata “Selinpadel”. Qui potrete scoprire i campi da paddle più moderni, sia esterni che interni, dove gli appassionati possono allenarsi sia al mattino che alla sera.
                                    </p>
                                    <a href="https://wa.me/393514279902?text=Ciao, vorrei maggiori informazioni sui campi da paddle di Selinpadel! Questo messaggio è per riferimento del Grand Hotel Selinunte." className="theme-btn btn-style border">
                                        <span>Contatta Selinpadel</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Second Selinpadel Section - Image Right, Text Left */}
                        <div className="col-xl-12">
                            <div className="single__service__item if__activities if__is__reverse">
                                <div className="service__thumb jarallax">
                                    <img
                                        className="jarallax-img"
                                        src="/assets/images/pages/activities/selinpadel2.webp" // Replace with the actual image you provide
                                        width={605}
                                        height={650}
                                        alt="Selinpadel"
                                    />
                                </div>
                                <div className="service__content">
                                    <div className="section__content__left">
                                        <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                            Selinpadel - Attività Sportive
                                        </span>
                                        <h2 className="content__title h2 wow fadeInUp lh-1">
                                            Sport, Divertimento e Relax
                                        </h2>
                                    </div>
                                    <p className="font-sm mt-20 wow fadeInUp">
                                    Con la sua ampia gamma di attività, Selinpadel è il posto ideale per gli amanti del paddle e delle attività sociali, perfetto per appassionati e gruppi che desiderano divertirsi e fare sport insieme.</p>
                                    <a href="https://wa.me/393514279902?text=Ciao, vorrei maggiori informazioni sulle attività sportive di Selinpadel! Questo messaggio è per riferimento del Grand Hotel Selinunte." className="theme-btn btn-style border">
                                        <span>Contatta Selinpadel</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Third Selinpadel Section - Image Left, Text Right */}
                        <div className="col-xl-12">
                            <div className="single__service__item if__activities">
                                <div className="service__thumb jarallax">
                                    <img
                                        className="jarallax-img"
                                        src="/assets/images/pages/activities/selinpadel3.webp" // Replace with the actual image you provide
                                        width={605}
                                        height={650}
                                        alt="Selinpadel"
                                    />
                                </div>
                                <div className="service__content">
                                    <div className="section__content__left">
                                        <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                            Sport e Relax al Selinpadel
                                        </span>
                                        <h2 className="content__title h2 wow fadeInUp lh-1">
                                            Un’Esperienza Completa tra Sport e Relax
                                        </h2>
                                    </div>
                                    <p className="font-sm mt-20 wow fadeInUp">
                                    Un’esperienza completa tra sport e relax, per una giornata attiva e divertente, di fronte al Grand Hotel Selinunte. </p>
                                    <a href="https://wa.me/393514279902?text=Ciao, vorrei maggiori informazioni sull'esperienza sportiva al Selinpadel! Questo messaggio è per riferimento del Grand Hotel Selinunte." className="theme-btn btn-style border">
                                        <span>Contatta Selinpadel</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Fourth Selinpadel Section - Image Right, Text Left */}
                        <div className="col-xl-12">
                            <div className="single__service__item if__activities if__is__reverse">
                                <div className="service__thumb jarallax">
                                    <img
                                        className="jarallax-img"
                                        src="/assets/images/pages/activities/selinpadel4.webp" // Replace with the actual image you provide
                                        width={605}
                                        height={650}
                                        alt="Selinpadel"
                                    />
                                </div>
                                <div className="service__content">
                                    <div className="section__content__left">
                                        <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                            Divertimento per Tutti
                                        </span>
                                        <h2 className="content__title h2 wow fadeInUp lh-1">
                                            Attività per Tutta la Famiglia
                                        </h2>
                                    </div>
                                    <p className="font-sm mt-20 wow fadeInUp">
                                    Che tu voglia insegnare ai bambini il loro primo servizio o sfidare mamma e papà a una partita di doppio in famiglia, i campi da paddle di Selinpadel sono pensati per il divertimento e l'unione di persone di tutte le età.
                                      </p>
                                    <a href="https://wa.me/393514279902?text=Salve, questo è un messaggio di riferimento del Grand Hotel Selinunte. Vorrei maggiori informazioni sulle attività a Selinpadel!" className="theme-btn btn-style border">
                                        <span>Contatta Selinpadel</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fine attività */}
        </>
    );
}

export default ActivitiesOne;
