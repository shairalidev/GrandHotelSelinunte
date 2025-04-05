import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Posts from '../data/data-post.json';

function BlogDetailsMain() {
    const { id } = useParams();
    const blogPost = Posts.find(post => post.id.toString() === id);

    console.log("Blog Post:", blogPost); // Debugging

    if (!blogPost) {
        return <div>Post non trovato!</div>;
    }

    return (
        <>
            {/* Intestazione Pagina */}
            <div
                className="rts__section page__hero__height page__hero__bg if__is__blog"
                style={{
                    backgroundImage: blogPost.blogImage
                        ? `url(/assets/images/pages/blog/${blogPost.blogImage})`
                        : "none"
                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="page__hero__content">
                                <Link to="#" className="texonomy h6 wow fadeInUp">
                                    {blogPost.category}
                                </Link>
                                <h1 className="wow fadeInUp">
                                    {blogPost.title}
                                </h1>
                                <div className="author__meta wow fadeInUp">
                                    <Link to="#">
                                        <img
                                            src="/assets/images/author/3.webp"
                                            height={40}
                                            width={40}
                                            alt="Autore"
                                        />
                                        {blogPost.author}
                                    </Link>
                                    <span>
                                        <img src="/assets/images/icon/clock.svg" alt="Orologio" /> 10 Minuti di Lettura
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fine Intestazione Pagina */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="blog__details">
                                <div className="blog__details__content">
                                    <p className="description">
                                        Benvenuto su Career Compass, la tua destinazione definitiva per consigli di carriera,
                                        strategie di ricerca lavoro e sviluppo professionale. Che tu sia un neolaureato, un
                                        professionista esperto o stia valutando un cambiamento di carriera, il nostro blog è la
                                        tua guida fidata per orientarti nel mercato del lavoro in continua evoluzione.
                                        <br />
                                        Su Career Compass comprendiamo che trovare il giusto percorso professionale può essere
                                        difficile. Per questo offriamo una ricca gamma di risorse per accompagnarti nel tuo cammino.
                                        Dai consigli su come scrivere un curriculum e affrontare i colloqui, ai suggerimenti su
                                        networking e sviluppo di competenze, i nostri esperti condividono le loro conoscenze per
                                        fornirti gli strumenti necessari per avere successo.
                                    </p>
                                    <img
                                        className="rounded-3 my-4 img-fluid"
                                        width={870}
                                        height={500}
                                        src="/assets/images/pages/blog/details.webp"
                                        alt=""
                                    />
                                    <h6 className="mb-4 mt-4">Servizi dell'Hotel</h6>
                                    <ul className="service-list list-unstyled">
                                        <li>
                                            <img src="/assets/images/icon/check-fill.svg" alt="" />
                                            Fuga Romantica
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/check-fill.svg" alt="" />
                                            Vacanza in Famiglia
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/check-fill.svg" alt="" />
                                            Organizzazione Eventi
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/check-fill.svg" alt="" />
                                            Promozioni Stagionali
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/check-fill.svg" alt="" />
                                            Sale Conferenze
                                        </li>
                                        <li>
                                            <img src="/assets/images/icon/check-fill.svg" alt="" />
                                            Offerte Speciali
                                        </li>
                                    </ul>
                                    <h6 className="mb-4 mt-4">
                                        Storie Reali degli Ospiti: Soggiorni Indimenticabili al Bokinn
                                    </h6>
                                    <p className="description">
                                        Benvenuto su Career Compass, la tua destinazione definitiva per consigli di carriera,
                                        strategie di ricerca lavoro e sviluppo professionale. Che tu sia un neolaureato, un
                                        professionista esperto o stia valutando un cambiamento di carriera, il nostro blog è la
                                        tua guida fidata per orientarti nel mercato del lavoro in continua evoluzione.
                                    </p>
                                    <blockquote className="rts__blockquote">
                                        <span className="blockquote__text">
                                            Contrariamente a quanto si crede, il Lorem Ipsum non è semplicemente testo casuale.
                                            Ha origini in un'opera di letteratura latina classica del 45 a.C., con oltre 2000 anni di storia.
                                            Richard McClintock, professore di latino all'Hampden-Sydney College in Virginia...
                                        </span>
                                    </blockquote>
                                    <p className="description">
                                        Su Career Compass comprendiamo che trovare il giusto percorso professionale può essere
                                        difficile. Per questo offriamo una ricca gamma di risorse per accompagnarti nel tuo cammino.
                                        Dai consigli su come scrivere un curriculum e affrontare i colloqui, ai suggerimenti su
                                        networking e sviluppo di competenze, i nostri esperti condividono le loro conoscenze per
                                        fornirti gli strumenti necessari per avere successo.
                                    </p>
                                    <h6 className="mb-30">Tag</h6>
                                    <div className="tag__list mb-30">
                                        <div className="tags__list">
                                            <Link to="#">Soggiorno in Hotel</Link>
                                            <Link to="#">Blog di Viaggio</Link>
                                            <Link to="#">Esperienza dell’Ospite</Link>
                                            <Link to="#">Guida all'Hotel</Link>
                                            <Link to="#">Recensione Hotel</Link>
                                        </div>
                                    </div>
                                    <div className="share mb-30">
                                        <h6 className="mb-20">Condividi</h6>
                                        <div className="social__link">
                                            <Link to="#">
                                                <i className="flaticon-linkedin" />
                                            </Link>
                                            <Link to="#">
                                                <i className="flaticon-twitter-alt-circle" />
                                            </Link>
                                            <Link to="#">
                                                <i className="flaticon-whatsapp" />
                                            </Link>
                                            <Link to="#">
                                                <i className="flaticon-facebook-messenger" />
                                            </Link>
                                        </div>
                                    </div>
                                    <h6 className="mb-30">Commenti</h6>
                                    <div className="comment__list">
                                        <div className="comment__item">
                                            <div className="comment__item__author">
                                                <div className="author__img">
                                                    <img
                                                        className="rounded-1"
                                                        src="/assets/images/author/3.webp"
                                                        width={60}
                                                        height={60}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author__info">
                                                    <h6 className="font-20 mb-0">Jonathon Doe</h6>
                                                    <span>Una settimana fa</span>
                                                </div>
                                            </div>
                                            <div className="comment__text">
                                                <p className="font-sm">
                                                    Ho ancora molto da studiare usando questo corso e gli altri esami pratici,
                                                    ma finora è stato fantastico! Non ho ancora sostenuto l’esame Security+,
                                                    quindi aggiornerò più avanti.
                                                </p>
                                                <Link to="#">
                                                    <img src="/assets/images/icon/reply.svg" alt="" />
                                                    Rispondi
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="comment__item">
                                            <div className="comment__item__author">
                                                <div className="author__img">
                                                    <img
                                                        className="rounded-1"
                                                        src="/assets/images/author/4.webp"
                                                        width={60}
                                                        height={60}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author__info">
                                                    <h6 className="font-20 mb-0">Michael Roy</h6>
                                                    <span>Una settimana fa</span>
                                                </div>
                                            </div>
                                            <div className="comment__text">
                                                <p className="font-sm">
                                                    Ho ancora molto da studiare usando questo corso e gli altri esami pratici,
                                                    ma finora è stato fantastico! Non ho ancora sostenuto l’esame Security+,
                                                    quindi aggiornerò più avanti.
                                                </p>
                                                <Link to="#">
                                                    <img src="/assets/images/icon/reply.svg" alt="" />
                                                    Rispondi
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* modulo commento */}
                                    <div className="comment__form mt-40">
                                        <h6 className="mb-3">Lascia un Commento</h6>
                                        <form action="#" className="comment__form__content">
                                            <div className="input-group">
                                                <div className="form-group">
                                                    <label htmlFor="name">Nome</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Il tuo nome"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">La tua Email</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="La tua email"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="msg">Il tuo Commento</label>
                                                <textarea
                                                    id="msg"
                                                    name="msg"
                                                    className="form-control"
                                                    placeholder="Il tuo messaggio"
                                                    required=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <button type="submit" className="theme-btn btn-style fill mt-4">
                                                <span>Invia Commento</span>
                                            </button>
                                        </form>
                                    </div>
                                    {/* fine modulo commento */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogDetailsMain;
