import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-md-6">
                            <div className="social__links">
                                <Link className="link__item gap-10" to="callto:+390924076901">
                                    <i className="flaticon-phone-flip" /> +390924076901
                                </Link>
                                <Link className="link__item gap-10" to="mailto:booking@grandhotelselinunte.com">
                                    <i className="flaticon-envelope" /> booking@grandhotelselinunte.com
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="location">
                                <Link className="link__item gap-10" to="/">
                                    <i className="flaticon-marker" />
                                    Contrada, Via Trenta Salme, 91022 Marinella TP, Italy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopBar