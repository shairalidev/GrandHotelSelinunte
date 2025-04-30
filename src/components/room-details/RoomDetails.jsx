import React, { useEffect, useState } from 'react';
import RoomBooking from './RoomBooking';
import CustomSlotSelect from './CustomSlotSelect';
import { slots } from './RoomBooking';

function RoomDetails({ inline = false }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [whatsAppLink, setWhatsAppLink] = useState('');
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    RoomBooking.attachFormListeners();
  }, []);

  return (
    <div className="container">
      <form
        id="scheduleForm"
        className={`advance__search ${inline ? 'inline-layout' : ''}`}
        onSubmit={(e) => {
          e.preventDefault();

          if (!selectedSlot) {
            setConfirmationMessage("⚠️ Seleziona prima il pacchetto.");
            return;
          }

          const adults = parseInt(document.getElementById("adults")?.value || "1");
          const childrenUnder6 = parseInt(document.getElementById("children0to5")?.value || "0");
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
          const message = ` Richiedi un preventivo

          Data del soggiorno: ${slotDate}
          Notti: ${selectedSlot.nights}
          Adulti: ${adults}
          Bambini (0-5): ${childrenUnder6}
          Bambini (6–12): ${children}
          Servizi extra: ${extras.length > 0 ? extras.join(", ") : "Nessuno"}
          Prezzo totale: ${total}

          Per favore, conferma la mia prenotazione.`;

          

          setConfirmationMessage(message);
          setWhatsAppLink(`https://wa.me/393288170176?text=${encodeURIComponent(message)}`);
          setShowWhatsApp(true);
        }}
      >
        <h5 className="pt-0">Prenota il tuo soggiorno</h5>

        <div className="advance__search__wrapper">
          <CustomSlotSelect
            slots={slots}
            onSelect={(slot) => {
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
            <label htmlFor="adults" className="query__label">Adulto</label>
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
          <div className="d-flex flex-wrap gap-3">
  <div className="query__input wow fadeInUp" style={{ flex: '1 1 48%' }}>
    <label htmlFor="children0to5" className="query__label">Bambini 0-5</label>
    <div className="query__input__position">
      <select id="children0to5" className="form-select">
        {[...Array(8)].map((_, i) => (
          <option key={i} value={i}>{i} Bambino</option>
        ))}
      </select>
      <div className="query__input__icon">
        <i className="flaticon-user"></i>
      </div>
    </div>
  </div>

  <div className="query__input wow fadeInUp" style={{ flex: '1 1 48%' }}>
    <label htmlFor="children612" className="query__label">Bambini 6-12</label>
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
    style={{
      marginTop: 15,
      fontWeight: "bold",
      color: "Black",
      whiteSpace: "pre-line",
      width: '100%' // ✅ force full row in inline mode
    }}
  >
    {confirmationMessage}
  </div>
)}

{showWhatsApp && (
  <div style={{ width: '100%' }}>
    <a
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
      data-wow-delay=".6s"
    >
      <span> Conferma su WhatsApp</span>
    </a>
  </div>
)}
        </div>
      </form>
    </div>
  );
}

export default RoomDetails;
