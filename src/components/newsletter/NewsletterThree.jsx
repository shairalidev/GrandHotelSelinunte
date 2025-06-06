import React from 'react'

function NewsletterThree() {
    return (
        <>
            {/* area contatto evento */}
            <div className="rts__section event__newsletter__bg">
                <div className="container">
                    <div className="row g-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="event__newsletter__text">
                                <h2 className="mb-0">
                                contattaci per organizzare il tuo evento privato
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event__newsletter__contact">
                                <div className="contact__method">
                                    <span className="h6">Prenotazioni Telefoniche</span>
                                    <a href="tel:+390924076901">
                                        <i className="flaticon-phone-flip" />
                                        +39 0924 076901
                                    </a>
                                </div>
                                <div className="contact__method">
                                    <span className="h6">Prenotazioni via Email</span>
                                    <a href="mailto:ghsbooking23@gmail.com">
                                        <img src="/assets/images/icon/mail.svg" alt="email icon" />
                                        ghsbooking23@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine area contatto */}
        </>
    )
}

export default NewsletterThree
