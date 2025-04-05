import React, { useEffect } from 'react'
import WOW from 'wowjs';

function BreadcrumbOne({ title = 'Titolo della Pagina', description = 'Questa è una breve descrizione della pagina.', bgImage }) {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);
    return (
        <>
            {/* intestazione pagina */}
            <div
                className="rts__section page__hero__height page__hero__bg"
                style={{ backgroundImage: `url(${bgImage || '/assets/images/pages/header__bg.webp'})` }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="page__hero__content">
                                <h1 className="wow fadeInUp">{title}</h1>
                                <p className="wow fadeInUp font-sm">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine intestazione pagina */}
        </>
    )
}

export default BreadcrumbOne
