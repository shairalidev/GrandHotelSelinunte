import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import { Link } from 'react-router-dom'

function ServiceOne() {
    useEffect(() => {
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
            {/* our service */}
            <div className="rts__section service is__home__three has__background has__shape">
                <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
                    <img src="/assets/images/index-3/service/sec-bg.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row mb-40">
                        <div className="section__topbar">
                            <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                                Our Service
                            </span>
                            <h2 className="content__title h2 lh-1 wow fadeInUp">Our Services</h2>
                        </div>
                    </div>
                    <div className="row">
                        {/* single service item */}
                        <div className="single__service__item if__is__default">
                            <div className="service__thumb jarallax">
                                <img
                                    className="jarallax-img"
                                    src="/assets/images/index-3/service/1.webp"
                                    width={605}
                                    height={535}
                                    alt=""
                                />
                            </div>
                            <div className="service__content">
                                <div className="section__topbar">
                                    <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                                        Spa &amp; Wellness
                                    </span>
                                    <h2 className="content__title h3 lh-1 wow fadeInUp ">
                                        Spa &amp; Wellness
                                    </h2>
                                </div>
                                <p className="font-sm mt-30 wow fadeInUp">
                                    At our Fitness &amp; Yoga Services, we are dedicated to helping
                                    you achieve your health and wellness goals. Our comprehensive
                                    program offers a variety of classes designed to suit all levels,
                                    from beginners to advanced practitioners.
                                </p>
                                <Link
                                    to="#"
                                    className="underline__style wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        {/* single service item end */}
                        {/* single service item */}
                        <div className="single__service__item if__is__reverse">
                            <div className="service__thumb jarallax">
                                <img
                                    className="jarallax-img"
                                    src="/assets/images/index-3/service/2.webp"
                                    width={605}
                                    height={535}
                                    alt="service"
                                />
                            </div>
                            <div className="service__content">
                                <div className="section__topbar">
                                    <span className="h6 subtitle__icon__five d-block wow fadeInUp">
                                        Romantic Getaway
                                    </span>
                                    <h2 className="content__title h3 lh-1 wow fadeInUp ">
                                        Romantic Getaway
                                    </h2>
                                </div>
                                <p className="font-sm mt-30 wow fadeInUp">
                                    At our Fitness &amp; Yoga Services, we are dedicated to helping
                                    you achieve your health and wellness goals. Our comprehensive
                                    program offers a variety of classes designed to suit all levels,
                                    from beginners to advanced practitioners.
                                </p>
                                <Link
                                    to="#"
                                    className="underline__style wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        {/* single service item end */}
                    </div>
                </div>
            </div>
            {/* our service end */}
        </>

    )
}

export default ServiceOne