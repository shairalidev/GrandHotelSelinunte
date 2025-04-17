import React from 'react'

function NewsletterThree() {
    return (
        <>
            {/* event newsletter */}
            <div className="rts__section event__newsletter__bg">
                <div className="container">
                    <div className="row g-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="event__newsletter__text">
                                <h2 className="mb-0">
                                Siamo qui per aiutarti. Contattaci oggi e partecipa al nostro evento.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event__newsletter__contact">
                                <div className="contact__method">
                                    <span className="h6">Reservation By Phone</span>
                                    <a href="callto:+390924076901">
                                        <i className="flaticon-phone-flip" />
                                        +390924076901
                                    </a>
                                </div>
                                <div className="contact__method">
                                    <span className="h6">Reservation By Email</span>
                                    <a href="mailto:booking@grandhotelselinunte.com">
                                        <img src="/assets/images/icon/mail.svg" alt="" />
                                        booking@grandhotelselinunte.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* event newsletter end */}
        </>

    )
}

export default NewsletterThree