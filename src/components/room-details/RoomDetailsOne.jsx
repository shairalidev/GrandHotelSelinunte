import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../data/data-room.json';
import RoomBooking from './RoomBooking';
import RoomDetails from './RoomDetails';

function RoomDetailsOne() {

  const { id } = useParams();
  const roomPost = Posts.find(post => post.id === parseInt(id));

  useEffect(() => {
    RoomBooking.attachFormListeners();
  }, []);

  if (!roomPost) {
    return <div>Post non trovato!</div>;
  }

  return (
    <>
      {/* area dettagli camera */}
      <div className="rts__section single page__hero__height page__hero__bg no__shadow">
        <img src={`/assets/images/pages/room/${roomPost.bannerImg}`} alt="" />
      </div>

      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-5 sticky-wrap">
            <div className="col-xxl-7 col-xl-7">
              <div className="room__details">
                
                <h2 className="room__title">{roomPost.title}</h2>
                <div className="room__meta">
                
                </div>
                <p>
                  Le nostre camere  arredate con eleganza sono progettate per offrire il massimo comfort e stile. Ogni camera è dotata di comfort moderni, arredi raffinati e dettagli pensati per garantire un soggiorno rilassante.
                  <br /><br />
                  Concediti un viaggio culinario nei nostri ristoranti in loco, dove i nostri talentuosi chef creano piatti deliziosi utilizzando ingredienti locali freschissimi. Inizia la giornata con una ricca colazione, gusta un pranzo tranquillo e assapora una cena gourmet in un ambiente elegante.
                </p>

                <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                  <div className="room__image__item">
                    <img className="rounded-2" src="/assets/images/pages/room/r-d-1.webp" alt="" />
                  </div>
                  <div className="room__image__item">
                    <img className="rounded-2" src="/assets/images/pages/room/r-d-2.webp" alt="" />
                  </div>
                </div>

                <span className="h4 d-block mb-30">Servizi della Camera</span>
                <div className="room__amenity mb-50">
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/wifi.svg" height={30} width={36} alt="" />
                      <span>Wi-Fi Gratuito</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/shower.svg" height={30} width={36} alt="" />
                      <span>Doccia</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/aeroplane.svg" height={30} width={36} alt="" />
                      <span>Trasporto Aeroportuale</span>
                    </div>
                  </div>
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/balcony.svg" height={30} width={36} alt="" />
                      <span>Balcone</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/refrigerator.svg" height={30} width={36} alt="" />
                      <span>Frigorifero</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/support.svg" height={30} width={36} alt="" />
                      <span>Supporto 24/7</span>
                    </div>
                  </div>
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/desk.svg" height={30} width={36} alt="" />
                      <span>Scrivania</span>
                    </div>
                   
                    <div className="single__item">
                      <img src="/assets/images/icon/swimming-pool.svg" height={30} width={36} alt="" />
                      <span>Piscina exterior</span>
                    </div>
                  </div>
                </div>

                <span className="h4 d-block mb-50">Caratteristiche della Camera</span>
                <div className="room__feature mb-30">
                  <div className="room__feature__image mb-50">
                    <img className="rounded-2" src="/assets/images/pages/room/r-d-3.webp" alt="" />
                  </div>
                  <div className="group__row">
                    <ul className="list__item">
                      <li>Bambini e letti extra</li>
                      <li>Controllo del Clima</li>
                      <li>Arte e Arredo</li>
                      <li>Macchina per Caffè/Tè</li>
                      <li>Biancheria di Alta Qualità</li>
                      <li>Tecnologia Intelligente</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Le nostre camere arredate con eleganza sono progettate per offrire il massimo comfort e stile. Ogni camera è dotata di comfort moderni, arredi raffinati e dettagli pensati per garantire un soggiorno rilassante.
                </p>
              </div>
            </div>

        {/* Booking form */}
<div className="col-xxl-5 col-xl-5 sticky-item">
  <div className="rts__booking__form has__background is__room__details sticky-item">
    <RoomDetails />
  </div>
</div>
{/* End Booking Form */}


          </div>
        </div>
      </div>
    </>
  );
}

export default RoomDetailsOne;