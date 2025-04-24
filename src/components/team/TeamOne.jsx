import React from 'react'
import { Link } from 'react-router-dom'

function TeamOne() {
    return (
        <>
            {/* team */}
            <div className="rts__section pt-120">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Il Nostro Team</span>
                                <h2 className="section__title">Conosci il Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-30">
                        <div className="col-lg-3 col-md-6">
                            <div className="team__member">
                                <Link to="#">
                                    <div className="team__member__thumb">
                                        <img src="/assets/images/pages/team/1.webp" alt="" />
                                    </div>
                                </Link>
                                <div className="team__member__meta">
                                    <Link to="#" className="h6">
                                        Emma Elizabeth
                                    </Link>
                                    <span className="designation">Direttrice</span>
                                    <div className="team__member__social">
                                        <Link to="#">
                                            <i className="flaticon-facebook" />
                                        </Link>
                                        <Link to="#">
                                            <i className="flaticon-linkedin" />
                                        </Link>
                                        <Link to="#">
                                            <i className="flaticon-whatsapp" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team__member">
                                <Link to="#">
                                    <div className="team__member__thumb">
                                        <img src="/assets/images/pages/team/2.webp" alt="" />
                                    </div>
                                </Link>
                                <div className="team__member__meta">
                                    <Link to="#" className="h6">
                                        Jonathon Doe
                                    </Link>
                                    <span className="designation">Vice Direttore</span>
                                    <div className="team__member__social">
                                        <Link to="#">
                                            <i className="flaticon-facebook" />
                                        </Link>
                                        <Link to="#">
                                            <i className="flaticon-linkedin" />
                                        </Link>
                                        <Link to="#">
                                            <i className="flaticon-whatsapp" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team__member">
                                <Link to="#">
                                    <div className="team__member__thumb">
                                        <img src="/assets/images/pages/team/3.webp" alt="" />
                                    </div>
                                </Link>
                                <div className="team__member__meta">
                                    <Link to="#" className="h6">
                                        Emma Elizabeth
                                    </Link>
                                    <span className="designation">Direttrice Generale</span>
                                    <div className="team__member__social">
                                        <Link to="#">
                                            <i className="flaticon-facebook" />
                                        </Link>
                                        <Link to="#">
                                            <i className="flaticon-linkedin" />
                                        </Link>
                                        <Link to="#">
                                            <i className="flaticon-whatsapp" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team__member">
                                <Link to="#">
                                    <div className="team__member__thumb">
                                        <img src="/assets/images/pages/team/4.webp" alt="" />
                                    </div>
                                </Link>
                                <div className="team__member__meta">
                                    <Link to="#" className="h6">
                                        Jhon Doe
                                    </Link>
                                    <span className="designation">Ispettore Qualità</span>
                                    <div className="team__member__social">
                                        <Link to="#">
                                            <i className="flaticon-facebook" />
                                        </Link>
                                        <Link to="#">
                                            <i className="flaticon-linkedin" />
                                        </Link>
                                        <Link to="#">
                                            <i className="flaticon-whatsapp" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine team */}
        </>
    )
}

export default TeamOne
