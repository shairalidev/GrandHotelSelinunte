import React from 'react'

function ContactOne() {
    return (
        <>
            {/* area contatti */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="rts__contact">
                                <span className="h4 d-block mb-30 text-center">
                                    Ci fa piacere sentirti! Mettiti in contatto!
                                </span>
                                <form
                                    action="mailer.php"
                                    method="post"
                                    className="rts__contact__form"
                                    id="contact-form"
                                >
                                    <div className="form-input">
                                        <label htmlFor="name">Il Tuo Nome</label>
                                        <div className="pr">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Il Tuo Nome"
                                                required=""
                                            />
                                            <i className="flaticon-user" />
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="email">La Tua Email</label>
                                        <div className="pr">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="La Tua Email"
                                                required=""
                                            />
                                            <i className="flaticon-envelope" />
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="msg">Il Tuo Messaggio</label>
                                        <div className="pr">
                                            <textarea
                                                id="msg"
                                                name="msg"
                                                placeholder="Messaggio"
                                                required=""
                                                defaultValue={""}
                                            />
                                            <img
                                                src="/assets/images/icon/message.svg"
                                                width={20}
                                                height={20}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="theme-btn btn-style fill w-100">
                                        <span>Invia Messaggio</span>
                                    </button>
                                </form>
                                <div id="form-messages" className="mt-20" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact__image">
                                <img
                                    className="rounded-2 w-100 img-fluid"
                                    src="/assets/images/pages/contact.webp"
                                    width={645}
                                    height={560}
                                    alt="immagine contatto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-120">
                    <div className="row g-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="contact__map">
                                <iframe
                                    className="w-100"
                                    height={560}
                                    src="https://maps.google.com/maps?width=100%25&height=600&hl=it&q=Grand%20Hotel%20Selinunte+(Grand%20Hotel%20Selinunte)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                    title="Mappa che mostra la posizione del Grand Hotel Selinunte"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact__info">
                                <div className="contact__info__item">
                                    <h4>Centro Informazioni Hotel</h4>
                                    <p>
                                        Orari di apertura: Lunedì – Domenica <br />
                                        Telefono:&nbsp;+390924076901 <br />
                                        Whatsapp: +393288170176 <br />
                                        Email:&nbsp;booking@grandhotelselinunte.com
                                    </p>
                                </div>
                                <div className="contact__info__item">
                                    <h4>Posizione dell'Hotel</h4>
                                    <p>
                                        Indirizzo: Contrada, Via Trenta Salme, 91022 Marinella TP, Italia <br />
                                        Telefono:&nbsp;+390924076901<br />
                                        Whatsapp: +393288170176 <br />
                                        Email:&nbsp;booking@grandhotelselinunte.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine area contatti */}
        </>
    )
}

export default ContactOne
