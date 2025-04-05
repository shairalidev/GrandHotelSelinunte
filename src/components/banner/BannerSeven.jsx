import React, { useEffect } from 'react';
import WOW from 'wowjs';

function BannerSeven() {
    useEffect(() => {
            new WOW.WOW().init();
                
            }, 
        []);
    return (
        <>
            {/* area banner */}
            <div className="rts__section banner__area is__home__six banner__height banner__center">
                <div className="banner__content">
                    <div className="banner__slider__image">
                        <img src="/assets/images/index-6/banner/banner.webp" alt="" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="banner__slide__content">
                                    <h1 className="wow fadeInUp">
                                        Scopri la Bellezza del Nostro Rifugio Costiero
                                    </h1>
                                </div>
                            </div>
                            <div
                                className="rts__section advance__search__section is__home__six wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <div className="container">
                                    <div className="row">
                                        <form
                                            action="/room-two"
                                            method="post"
                                            className="advance__search"
                                        >
                                            <div className="advance__search__wrapper wow fadeInUp">
                                                {/* input singolo */}
                                                <div className="query__input">
                                                    <label htmlFor="check__in" className="query__label">
                                                        Arrivo
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="check__in"
                                                        name="check__in"
                                                        placeholder="15 Giu 2024"
                                                        required=""
                                                    />
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-calendar" />
                                                    </div>
                                                </div>
                                                {/* fine input singolo */}
                                                {/* input singolo */}
                                                <div className="query__input">
                                                    <label htmlFor="check__out" className="query__label">
                                                        Partenza
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="check__out"
                                                        name="check__out"
                                                        placeholder="15 Mag 2024"
                                                        required=""
                                                    />
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-calendar" />
                                                    </div>
                                                </div>
                                                {/* fine input singolo */}
                                                {/* input singolo */}
                                                <div className="query__input">
                                                    <label htmlFor="adult" className="query__label ">
                                                        Adulti
                                                    </label>
                                                    <select name="adult" id="adult" className="form-select">
                                                        <option value={1}>1 Persona</option>
                                                        <option value={2}>2 Persone</option>
                                                        <option value={3}>3 Persone</option>
                                                        <option value={4}>4 Persone</option>
                                                        <option value={5}>5 Persone</option>
                                                        <option value={6}>6 Persone</option>
                                                        <option value={7}>7 Persone</option>
                                                        <option value={8}>8 Persone</option>
                                                        <option value={9}>9 Persone</option>
                                                    </select>
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-user" />
                                                    </div>
                                                </div>
                                                {/* fine input singolo */}
                                                {/* input singolo */}
                                                <div className="query__input">
                                                    <label htmlFor="child" className="query__label ">
                                                        Bambini
                                                    </label>
                                                    <select name="child" id="child" className="form-select">
                                                        <option value={1}>1 Bambino</option>
                                                        <option value={2}>2 Bambini</option>
                                                        <option value={3}>3 Bambini</option>
                                                        <option value={4}>4 Bambini</option>
                                                        <option value={5}>5 Bambini</option>
                                                        <option value={6}>6 Bambini</option>
                                                        <option value={7}>7 Bambini</option>
                                                        <option value={8}>8 Bambini</option>
                                                        <option value={9}>9 Bambini</option>
                                                    </select>
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-user" />
                                                    </div>
                                                </div>
                                                {/* fine input singolo */}
                                                {/* pulsante invio */}
                                                <button className="theme-btn btn-style fill no-border search__btn">
                                                    <span>Verifica Ora</span>
                                                </button>
                                                {/* fine pulsante invio */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine area banner */}
        </>
    )
}

export default BannerSeven
