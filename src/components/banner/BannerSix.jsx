import React, { useEffect } from 'react';
import WOW from 'wowjs'; // Import DatePicker styles

function BannerSix() {
    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <>
            {/* area banner */}
            <div className="rts__section banner__area is__home__five banner__height banner__center">
                <div className="banner__content">
                    <div className="banner__slider__image">
                        <img
                            className="is__clippath"
                            src="/assets/images/index-5/banner/banner-bg.webp"
                            alt=""
                        />
                    </div>
                    <div className="container">
                        <div className="row g-30 align-items-center">
                            <div className="col-lg-7">
                                <div className="banner__slide__content if__not__slider">
                                    <h1 className="wow fadeInUp">
                                        Scopri il Lusso nel Cuore della Città
                                    </h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="rts__booking__form">
                                    <form action="#" method="post" className="advance__search">
                                        <h5>Prenota il Tuo Soggiorno</h5>
                                        <div className="advance__search__wrapper is__home__five">
                                            {/* input singolo */}
                                            <div className="query__input wow fadeInUp">
                                                <label htmlFor="check__in" className="query__label">
                                                    Arrivo
                                                </label>
                                                <div className="query__input__position">
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
                                            </div>
                                            {/* fine input singolo */}
                                            {/* input singolo */}
                                            <div
                                                className="query__input wow fadeInUp"
                                                data-wow-delay=".3s"
                                            >
                                                <label htmlFor="check__out" className="query__label">
                                                    Partenza
                                                </label>
                                                <div className="query__input__position">
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
                                            </div>
                                            {/* fine input singolo */}
                                            {/* input singolo */}
                                            <div
                                                className="query__input wow fadeInUp"
                                                data-wow-delay=".4s"
                                            >
                                                <label htmlFor="adult" className="query__label">
                                                    Adulti
                                                </label>
                                                <div className="query__input__position">
                                                    <select name="adult" id="adult" className="form-select">
                                                        <option value={1}>1 Persona</option>
                                                        <option value={2}>2 Persone</option>
                                                        <option value={3}>3 Persone</option>
                                                        <option value={4}>4 Persone</option>
                                                        <option value={5}>5 Persone</option>
                                                        <option value={6}>6 Persone</option>
                                                        <option value={7}>7 Persone</option>
                                                    </select>
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-user" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* fine input singolo */}
                                            {/* input singolo */}
                                            <div
                                                className="query__input wow fadeInUp"
                                                data-wow-delay=".5s"
                                            >
                                                <label htmlFor="child" className="query__label">
                                                    Bambini
                                                </label>
                                                <div className="query__input__position">
                                                    <select name="child" id="child" className="form-select">
                                                        <option value={1}>1 Bambino</option>
                                                        <option value={2}>2 Bambini</option>
                                                        <option value={3}>3 Bambini</option>
                                                        <option value={4}>4 Bambini</option>
                                                        <option value={5}>5 Bambini</option>
                                                        <option value={6}>6 Bambini</option>
                                                        <option value={7}>7 Bambini</option>
                                                    </select>
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-user" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* fine input singolo */}
                                            {/* pulsante invio */}
                                            <button
                                                className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                                                data-wow-delay=".6s"
                                            >
                                                <span>
                                                    <i className="flaticon-search-1" /> Cerca
                                                </span>
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
            {/* fine area banner */}
        </>
    )
}

export default BannerSix
