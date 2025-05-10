import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';

function AboutOne() {
    useEffect(() => {
        // Check if the device is mobile
        const isMobileDevice = () => {
            return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };

        if (!isMobileDevice()) {
            document.querySelectorAll('.jarallax').forEach(element => {
                jarallax(element, {
                    speed: 0.2, // Adjust speed if necessary
                });
            });
        } else {
            console.log('Jarallax skipped on mobile devices');
        }
    }, []);

    return (
        <div className="rts__section about__area is__home__main section__padding">
            <div className="section__shape d-none d-xl-block">
                <img src="/assets/images/about/section__shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="image">
                            <div className="position-relative wow fadeInUp" data-wow-delay=".3s">
                                <div className="jara-mask-1 jarallax image-height">
                                    {/* Ensure jarallax-img is present */}
                                    <img
                                        src="/assets/images/about/about-1.webp"
                                        className="jarallax-img"
                                        alt="Background"
                                    />
                                </div>
                            </div>
                            <div className="image__card radius-10 wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon radius-10 center-item">
                                    <i className="flaticon-people" />
                                </div>
                                <div className="content">
                                    <span className="h5">50+</span>
                                    <p>Personale di esperienza</p>
                                </div>
                            </div>
                            <div className="image__card__image wow fadeInUp">
                                <img
                                    src="/assets/images/about/about-main.webp"
                                    width={312}
                                    height={230}
                                    alt="About"
                                />
                            </div>
                        </div>
                        <div className="content">
                            <span className="h6 subtitle__icon__two d-block wow fadeInUp">Chi Siamo</span>
                            <h2 className="content__title wow fadeInUp">
                            Benvenuti al nostro Grand Hotel Selinunte &amp; Resort
                            </h2>
                            <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                            Benvenuti in Italia, dove il lusso incontra il comfort nel cuore di Marinella. 
                                Da sempre ci dedichiamo a offrire un soggiorno eccezionale ai nostri ospiti, 
                                unendo servizi moderni a un’eleganza senza tempo. Le nostre camere, 
                                splendidamente arredate, offrono viste mozzafiato e sistemazioni raffinate, 
                                garantendo un rifugio rilassante sia per viaggi di lavoro che di piacere.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutOne;
