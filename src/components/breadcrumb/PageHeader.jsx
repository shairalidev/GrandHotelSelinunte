import React from 'react'

function PageHeader() {
    return (
        <>
            {/* intestazione pagina */}
            <div
                className="rts__section page__hero__height page__hero__bg no__shadow"
                style={{ backgroundImage: "url(assets/images/pages/header__bg.webp)" }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="page__hero__content visually-hidden">
                                <h1 className="wow fadeInUp">nessun titolo</h1>
                                <p className="wow fadeInUp font-sm">non visibile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine intestazione pagina */}
        </>
    )
}

export default PageHeader
