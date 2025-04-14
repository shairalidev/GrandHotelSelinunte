import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Posts from '../data/data-room.json';
import RoomBooking from './RoomBooking';

import CustomSlotSelect from './CustomSlotSelect';
import { slots } from './RoomBooking';

function RoomDetailsOne() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [whatsAppLink, setWhatsAppLink] = useState('');
  const [showWhatsApp, setShowWhatsApp] = useState(false);

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
            <div className="col-xxl-8 col-xl-7">
              <div className="room__details">
                <span className="h4 price">{roomPost.price}</span>
                <h2 className="room__title">{roomPost.title}</h2>
                <div className="room__meta">
                  <span><i className="flaticon-construction" /> 35 mq</span>
                  <span><i className="flaticon-user" />5 Persone</span>
                </div>
                <p>
                  Le nostre camere e suite arredate con eleganza sono progettate per offrire il massimo comfort e stile. Ogni camera è dotata di comfort moderni, arredi raffinati e dettagli pensati per garantire un soggiorno rilassante.
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
                      <img src="/assets/images/icon/fitness.svg" height={30} width={36} alt="" />
                      <span>Centro Fitness</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/swimming-pool.svg" height={30} width={36} alt="" />
                      <span>Piscina</span>
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
                  Le nostre camere e suite arredate con eleganza sono progettate per offrire il massimo comfort e stile. Ogni camera è dotata di comfort moderni, arredi raffinati e dettagli pensati per garantire un soggiorno rilassante.
                </p>
              </div>
            </div>

        {/* Booking form */}
<div className="col-xxl-4 col-xl-5 sticky-item">
  <div className="rts__booking__form has__background is__room__details sticky-item">
    <form
      id="scheduleForm"
      className="advance__search"
      onSubmit={(e) => {
        e.preventDefault();

        if (!selectedSlot) {
          setConfirmationMessage("⚠️ Please select a slot first.");
          return;
        }

        const adults = parseInt(document.getElementById("adults")?.value || "1");
        const children = parseInt(document.getElementById("children612")?.value || "0");
        const pet = document.getElementById("pet")?.checked;
        const crib = document.getElementById("crib")?.checked;
        const pool = document.getElementById("pool")?.checked;
        const total = document.getElementById("totalPrice")?.innerText || "€0.00";

        const extras = [];
        if (pet) extras.push("Pet-Friendly");
        if (crib) extras.push("Crib Service");
        if (pool) extras.push("Pool View");

        const slotDate = selectedSlot?.description || "Unknown";



        const message = ` *Booking Confirmation*



 Slot Date: ${slotDate}
 Nights: ${selectedSlot.nights}
 Adults: ${adults}
 Children (6–12): ${children}
 Extra Services: ${extras.length > 0 ? extras.join(", ") : "None"}
 Total Price: ${total}
        

Please confirm my booking.`;

        setConfirmationMessage(message);
        setWhatsAppLink(`https://wa.me/393288170176?text=${encodeURIComponent(message)}`);
        setShowWhatsApp(true);
      }}
    >
      <h5 className="pt-0">Prenota il tuo soggiorno</h5>

      <div className="advance__search__wrapper">
        {/* Slot Select */}
        <CustomSlotSelect
  slots={slots}
  onSelect={(slot) => {
    console.log("Selected slot:", slot); // Debug: See what properties are returned
    setSelectedSlot(slot);
    const hiddenSlotInput = document.getElementById("slotSelect");
    if (hiddenSlotInput) {
      hiddenSlotInput.value = JSON.stringify(slot);
    }
    RoomBooking.calculateTotalPrice();
  }}
/>


        {/* Adults */}
        <div className="query__input wow fadeInUp">
          <label htmlFor="adults" className="query__label">Adult</label>
          <div className="query__input__position">
            <select id="adults" className="form-select">
              {[...Array(7)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} Persona</option>
              ))}
            </select>
            <div className="query__input__icon">
              <i className="flaticon-user"></i>
            </div>
          </div>
        </div>

        {/* Children */}
        <div className="query__input wow fadeInUp">
          <label htmlFor="children612" className="query__label">Bambino</label>
          <div className="query__input__position">
            <select id="children612" className="form-select">
              {[...Array(8)].map((_, i) => (
                <option key={i} value={i}>{i} Bambino</option>
              ))}
            </select>
            <div className="query__input__icon">
              <i className="flaticon-user"></i>
            </div>
          </div>
        </div>

        <h5 className="p-0 mt-20">Servizi aggiuntivi</h5>

        {/* Extra Services */}
        <div className="query__input checkbox wow fadeInUp">
          <input type="checkbox" id="pet" />
          <label htmlFor="pet">Animali ammessi</label>
          <span>€30 a soggiorno</span>
        </div>
        <div className="query__input checkbox wow fadeInUp">
          <input type="checkbox" id="crib" />
          <label htmlFor="crib">Servizio culla</label>
          <span>€10 / Notte</span>
        </div>
        <div className="query__input checkbox wow fadeInUp">
          <input type="checkbox" id="pool" />
          <label htmlFor="pool">Vista sulla piscina</label>
          <span>€10 / Notte</span>
        </div>

        {/* Total Price */}
        <div className="total__price">
          <span className="total h6 mb-0">Prezzo totale</span>
          <span className="price h6 m-0" id="totalPrice">€0.00</span>
        </div>

        {/* Book Button */}
        <button
          type="submit"
          className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
          data-wow-delay=".6s"
        >
          <span>Prenota la tua camera</span>
        </button>

        {/* Confirmation Message */}
        {confirmationMessage && (
          <div
            id="confirmationMessage"
            style={{ marginTop: 15, fontWeight: "bold", color: "green", whiteSpace: "pre-line" }}
          >
            {confirmationMessage}
          </div>
        )}

        {/* WhatsApp Button */}
        {showWhatsApp && (
          <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
          data-wow-delay=".6s"
        >
            <span> Conferma su WhatsApp</span>
         
        </a>
        )}
      </div>
    </form>
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