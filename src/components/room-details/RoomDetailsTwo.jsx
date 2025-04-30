import { useParams } from 'react-router-dom';
import Posts from '../data/data-room.json';
import RoomDetails from './RoomDetails';

function RoomDetails2() {
    const { id } = useParams();
    const roomPost = Posts.find(post => post.id === parseInt(id));

    if (!roomPost) {
        return <div>Post non trovato!</div>;
    }

    return (
        <>
            <div className="rts__section single page__hero__height page__hero__bg no__shadow">
                <img src={`/assets/images/pages/room/${roomPost.bannerImg}`} alt="" />
            </div>

            {/* dettagli camera - top */}
            <div className="rts__section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="room__details__top">
                                <span className="h2 price">{roomPost.price}</span>
                                <h1>{roomPost.title}</h1>
                                <div className="room__meta">
                                    <span>
                                        <i className="flaticon-construction" />
                                        35 mq
                                    </span>
                                    <span>
                                        <i className="flaticon-user" />5 Persone
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* area dettagli camera */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-5 sticky-wrap">
                        <div className="col-lg-7">
                            <div className="room__details">
                                <h4 className="mb-30">Descrizione della Camera</h4>
                                <p>
                                    Le nostre camere elegantemente arredate sono progettate per offrire
                                    il massimo comfort e stile. Ogni stanza dispone di comfort moderni,
                                    arredi raffinati e dettagli pensati per garantire un soggiorno rilassante.
                                    <br /><br />
                                    Vivi un viaggio culinario nei nostri ristoranti interni, dove
                                    chef esperti creano piatti deliziosi con ingredienti freschi locali. 
                                    Inizia la giornata con una colazione abbondante, pranza in tranquillità 
                                    e goditi una cena gourmet in un ambiente elegante.
                                </p>

                                <h4 className="mb-40">Video della Camera</h4>
                                <div className="video__area mb-50 position-relative wow fadeInUp">
                                    <div className="video__area__image is__room__details jara-mask-2 jarallax">
                                        <img
                                            className="radius-10 jarallax-img"
                                            src="/assets/images/pages/video-bg.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="video--spinner__wrapper">
                                        <div className="rts__circle">
                                            <svg className="spinner" viewBox="0 0 100 100">
                                                <defs>
                                                    <path
                                                        id="circle-2"
                                                        d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                                                    />
                                                </defs>
                                                <text>
                                                    <textPath xlinkHref="#circle-2">
                                                        Guarda Ora * Guarda Ora * Guarda il Video Completo *
                                                    </textPath>
                                                </text>
                                            </svg>
                                            <div className="rts__circle--icon">
                                                <a
                                                    href="https://www.youtube.com/watch?v=AzHyRxonWYw"
                                                    className="video-play"
                                                >
                                                    <i className="flaticon-play" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <span className="h4 d-block mb-30">Servizi della Camera</span>
                                <div className="room__amenity mb-50">
                                    <div className="group__row if__room__details__two">
                                        <div className="single__item">
                                            <img src="/assets/images/icon/wifi.svg" height={30} width={36} alt="" />
                                            <span>Wi-Fi Gratuito</span>
                                        </div>
                                        <div className="single__item">
                                            <img src="/assets/images/icon/shower.svg" height={30} width={36} alt="" />
                                            <span>Doccia</span>
                                        </div>
                                    </div>
                                    <div className="group__row if__room__details__two">
                                        <div className="single__item">
                                            <img src="/assets/images/icon/aeroplane.svg" height={30} width={36} alt="" />
                                            <span>Trasferimento Aeroporto</span>
                                        </div>
                                        <div className="single__item">
                                            <img src="/assets/images/icon/balcony.svg" height={30} width={36} alt="" />
                                            <span>Balcone</span>
                                        </div>
                                    </div>
                                    <div className="group__row if__room__details__two">
                                        <div className="single__item">
                                            <img src="/assets/images/icon/refrigerator.svg" height={30} width={36} alt="" />
                                            <span>Frigorifero</span>
                                        </div>
                                        <div className="single__item">
                                            <img src="/assets/images/icon/support.svg" height={30} width={36} alt="" />
                                            <span>Supporto 24/7</span>
                                        </div>
                                    </div>
                                    <div className="group__row if__room__details__two">
                                        <div className="single__item">
                                            <img src="/assets/images/icon/desk.svg" height={30} width={36} alt="" />
                                            <span>Scrivania</span>
                                        </div>
                                    </div>
                                </div>

                                <span className="h4 d-block mb-50">Caratteristiche della Camera</span>
                                <div className="room__feature mb-20">
                                    <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                                        <div className="room__image__item">
                                            <img className="rounded-2" src="/assets/images/pages/room/r-d-1.webp" alt="" />
                                        </div>
                                        <div className="room__image__item">
                                            <img className="rounded-2" src="/assets/images/pages/room/r-d-2.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="group__row is__room__details">
                                        <ul className="list__item">
                                            <li>Bambini e letti extra</li>
                                            <li>Climatizzazione</li>
                                        </ul>
                                        <ul className="list__item">
                                            <li>Arte e Decorazioni</li>
                                            <li>Macchina per Caffè/Tè</li>
                                        </ul>
                                        <ul className="list__item">
                                            <li>Biancheria di Alta Qualità</li>
                                            <li>Tecnologia Smart</li>
                                        </ul>
                                    </div>
                                </div>

                                <p>
                                    Le nostre camere elegantemente arredate sono progettate per offrire
                                    il massimo comfort e stile. Ogni stanza dispone di comfort moderni,
                                    arredi raffinati e dettagli pensati per garantire un soggiorno rilassante.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-5 sticky-item">
                            <div className="rts__booking__form has__background is__room__details sticky-item">
                                <RoomDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomDetails2;
