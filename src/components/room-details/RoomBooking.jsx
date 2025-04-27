// RoomBooking.jsx
export const slots = [
  // APRIL
  { start: "2025-04-01", end: "2025-04-04", nights: 3, price: 210, description: "Dal 1 al 4 aprile 210€ (3 notti)" },
  { start: "2025-04-01", end: "2025-04-06", nights: 5, price: 350, description: "Dal 1 al 6 aprile 350€ (5 notti)" },
  { start: "2025-04-04", end: "2025-04-06", nights: 2, price: 160, description: "Dal 4 al 6 aprile 160€ (2 notti)" },
  { start: "2025-04-06", end: "2025-04-11", nights: 5, price: 350, description: "Dal 6 al 11 aprile 350€ (5 notti)" },
  { start: "2025-04-06", end: "2025-04-13", nights: 7, price: 500, description: "Dal 6 al 13 aprile 500€ (7 notti)" },
  { start: "2025-04-11", end: "2025-04-13", nights: 2, price: 160, description: "Dal 11 al 13 aprile 160€ (2 notti)" },
  { start: "2025-04-13", end: "2025-04-18", nights: 5, price: 350, description: "Dal 13 al 18 aprile 350€ (5 notti)" },
  { start: "2025-04-13", end: "2025-04-20", nights: 7, price: 500, description: "Dal 13 al 20 aprile 500€ (7 notti)" },
  { start: "2025-04-18", end: "2025-04-20", nights: 2, price: 160, description: "Dal 18 al 20 aprile 160€ (2 notti)" },
  { start: "2025-04-20", end: "2025-04-25", nights: 5, price: 350, description: "Dal 20 al 25 aprile 350€ (5 notti)" },
  { start: "2025-04-20", end: "2025-04-27", nights: 7, price: 500, description: "Dal 20 al 27 aprile 500€ (7 notti)" },
  { start: "2025-04-25", end: "2025-04-27", nights: 2, price: 160, description: "Dal 25 al 27 aprile 160€ (2 notti)" },
  { start: "2025-04-27", end: "2025-05-01", nights: 4, price: 350, description: "Dal 27 aprile al 1 maggio 350€ (4 notti)" },
  { start: "2025-04-27", end: "2025-05-04", nights: 7, price: 570, description: "Dal 27 aprile al 4 maggio 570€ (7 notti)" },
    
  

  // MAY
  { start: "2025-05-01", end: "2025-05-04", nights: 3, price: 250, description: "Dal 1 al 4 maggio 250€ (3 notti)" },
  { start: "2025-05-04", end: "2025-05-11", nights: 7, price: 480, description: "Dal 4 al 11 maggio 480€ (7 notti)" },
  { start: "2025-05-04", end: "2025-05-08", nights: 4, price: 280, description: "Dal 4 al 8 maggio 280€ (4 notti)" },
  { start: "2025-05-08", end: "2025-05-11", nights: 3, price: 230, description: "Dal 8 al 11 maggio 230€ (3 notti)" },
  { start: "2025-05-11", end: "2025-05-18", nights: 7, price: 480, description: "Dal 11 al 18 maggio 480€ (7 notti)" },
  { start: "2025-05-11", end: "2025-05-15", nights: 4, price: 280, description: "Dal 11 al 15 maggio 280€ (4 notti)" },
  { start: "2025-05-15", end: "2025-05-18", nights: 3, price: 230, description: "Dal 15 al 18 maggio 230€ (3 notti)" },
  { start: "2025-05-18", end: "2025-05-25", nights: 7, price: 480, description: "Dal 18 al 25 maggio 480€ (7 notti)" },
  { start: "2025-05-18", end: "2025-05-22", nights: 4, price: 280, description: "Dal 18 al 22 maggio 280€ (4 notti)" },
  { start: "2025-05-22", end: "2025-05-25", nights: 3, price: 230, description: "Dal 22 al 25 maggio 230€ (3 notti)" },
  { start: "2025-05-25", end: "2025-06-01", nights: 7, price: 480, description: "Dal 25 maggio al 1 giugno 480€ (7 notti)" },
  { start: "2025-05-25", end: "2025-05-29", nights: 4, price: 280, description: "Dal 25 al 29 maggio 280€ (4 notti)" },
  { start: "2025-05-29", end: "2025-06-01", nights: 3, price: 230, description: "Dal 29 maggio al 1 giugno 230€ (3 notti)" },
  

   // JUNE
   { start: "2025-06-01", end: "2025-06-08", nights: 7, price: 500, description: "Dal 1 al 8 giugno 500€ (7 notti)" },
   { start: "2025-06-01", end: "2025-06-05", nights: 4, price: 300, description: "Dal 1 al 5 giugno 300€ (4 notti)" },
   { start: "2025-06-05", end: "2025-06-08", nights: 3, price: 230, description: "Dal 5 al 8 giugno 230€ (3 notti)" },
   { start: "2025-06-08", end: "2025-06-15", nights: 7, price: 480, description: "Dal 8 al 15 giugno 480€ (7 notti)" },
   { start: "2025-06-08", end: "2025-06-12", nights: 4, price: 280, description: "Dal 8 al 12 giugno 280€ (4 notti)" },
   { start: "2025-06-12", end: "2025-06-15", nights: 3, price: 230, description: "Dal 12 al 15 giugno 230€ (3 notti)" },
   { start: "2025-06-15", end: "2025-06-22", nights: 7, price: 550, description: "Dal 15 al 22 giugno 550€ (7 notti)" },
   { start: "2025-06-15", end: "2025-06-19", nights: 4, price: 320, description: "Dal 15 al 19 giugno 320€ (4 notti)" },
   { start: "2025-06-19", end: "2025-06-22", nights: 3, price: 260, description: "Dal 19 al 22 giugno 260€ (3 notti)" },
   { start: "2025-06-22", end: "2025-06-29", nights: 7, price: 550, description: "Dal 22 al 29 giugno 550€ (7 notti)" },
   { start: "2025-06-22", end: "2025-06-26", nights: 4, price: 320, description: "Dal 22 al 26 giugno 320€ (4 notti)" },
   { start: "2025-06-26", end: "2025-06-29", nights: 3, price: 260, description: "Dal 26 al 29 giugno 260€ (3 notti)" },
   { start: "2025-06-29", end: "2025-07-06", nights: 7, price: 570, description: "Dal 29 giugno al 6 luglio 570€ (7 notti)" },
   { start: "2025-06-29", end: "2025-07-03", nights: 4, price: 320, description: "Dal 29 giugno al 3 luglio 320€ (4 notti)" },
   { start: "2025-07-03", end: "2025-07-06", nights: 3, price: 280, description: "Dal 3 al 6 luglio 280€ (3 notti)" },
   
  // JULY
  { start: "2025-07-06", end: "2025-07-13", nights: 7, price: 600, description: "Dal 6 al 13 luglio 600€ (7 notti)" },
  { start: "2025-07-06", end: "2025-07-10", nights: 4, price: 360, description: "Dal 6 al 10 luglio 360€ (4 notti)" },
  { start: "2025-07-10", end: "2025-07-13", nights: 3, price: 280, description: "Dal 10 al 13 luglio 280€ (3 notti)" },
  { start: "2025-07-13", end: "2025-07-20", nights: 7, price: 660, description: "Dal 13 al 20 luglio 660€ (7 notti)" },
  { start: "2025-07-13", end: "2025-07-17", nights: 4, price: 380, description: "Dal 13 al 17 luglio 380€ (4 notti)" },
  { start: "2025-07-17", end: "2025-07-20", nights: 3, price: 315, description: "Dal 17 al 20 luglio 315€ (3 notti)" },
  { start: "2025-07-20", end: "2025-07-27", nights: 7, price: 690, description: "Dal 20 al 27 luglio 690€ (7 notti)" },
  { start: "2025-07-20", end: "2025-07-24", nights: 4, price: 400, description: "Dal 20 al 24 luglio 400€ (4 notti)" },
  { start: "2025-07-24", end: "2025-07-27", nights: 3, price: 330, description: "Dal 24 al 27 luglio 330€ (3 notti)" },
  { start: "2025-07-27", end: "2025-07-31", nights: 4, price: 400, description: "Dal 27 al 31 luglio 400€ (4 notti)" },
  { start: "2025-07-27", end: "2025-08-03", nights: 7, price: 690, description: "Dal 27 luglio al 3 agosto 690€ (7 notti)" },
  { start: "2025-07-31", end: "2025-08-03", nights: 3, price: 330, description: "Dal 31 luglio al 3 agosto 330€ (3 notti)" },
  

  // AUGUST
{ start: "2025-08-03", end: "2025-08-10", nights: 7, price: 725, description: "Dal 3 al 10 agosto 725€ (7 notti)" },
{ start: "2025-08-03", end: "2025-08-07", nights: 4, price: 420, description: "Dal 3 al 7 agosto 420€ (4 notti)" },
{ start: "2025-08-07", end: "2025-08-10", nights: 3, price: 345, description: "Dal 7 al 10 agosto 345€ (3 notti)" },
{ start: "2025-08-10", end: "2025-08-17", nights: 7, price: 960, description: "Dal 10 al 17 agosto 960€ (7 notti)" },
{ start: "2025-08-10", end: "2025-08-13", nights: 3, price: 330, description: "Dal 10 al 13 agosto 330€ (3 notti)" },
{ start: "2025-08-13", end: "2025-08-17", nights: 4, price: 680, description: "Dal 13 al 17 agosto 680€ (4 notti)" },
{ start: "2025-08-17", end: "2025-08-24", nights: 7, price: 900, description: "Dal 17 al 24 agosto 900€ (7 notti)" },
{ start: "2025-08-17", end: "2025-08-21", nights: 4, price: 520, description: "Dal 17 al 21 agosto 520€ (4 notti)" },
{ start: "2025-08-21", end: "2025-08-24", nights: 3, price: 435, description: "Dal 21 al 24 agosto 435€ (3 notti)" },
{ start: "2025-08-24", end: "2025-08-31", nights: 7, price: 780, description: "Dal 24 al 31 agosto 780€ (7 notti)" },
{ start: "2025-08-24", end: "2025-08-28", nights: 4, price: 460, description: "Dal 24 al 28 agosto 460€ (4 notti)" },
{ start: "2025-08-28", end: "2025-08-31", nights: 3, price: 360, description: "Dal 28 al 31 agosto 360€ (3 notti)" },

  // SEPTEMBER
  { start: "2025-08-31", end: "2025-09-07", nights: 7, price: 690, description: "Dal 31 agosto al 7 settembre 690€ (7 notti)" },
  { start: "2025-08-31", end: "2025-09-04", nights: 4, price: 400, description: "Dal 31 agosto al 4 settembre 400€ (4 notti)" },
  { start: "2025-09-04", end: "2025-09-07", nights: 3, price: 330, description: "Dal 4 al 7 settembre 330€ (3 notti)" },
  { start: "2025-09-07", end: "2025-09-14", nights: 7, price: 630, description: "Dal 7 al 14 settembre 630€ (7 notti)" },
  { start: "2025-09-07", end: "2025-09-11", nights: 4, price: 360, description: "Dal 7 al 11 settembre 360€ (4 notti)" },
  { start: "2025-09-11", end: "2025-09-14", nights: 3, price: 300, description: "Dal 11 al 14 settembre 300€ (3 notti)" },
  { start: "2025-09-14", end: "2025-09-21", nights: 7, price: 580, description: "Dal 14 al 21 settembre 580€ (7 notti)" },
  { start: "2025-09-14", end: "2025-09-18", nights: 4, price: 340, description: "Dal 14 al 18 settembre 340€ (4 notti)" },
  { start: "2025-09-18", end: "2025-09-21", nights: 3, price: 270, description: "Dal 18 al 21 settembre 270€ (3 notti)" },
  { start: "2025-09-21", end: "2025-09-28", nights: 7, price: 540, description: "Dal 21 al 28 settembre 540€ (7 notti)" },
  { start: "2025-09-21", end: "2025-09-25", nights: 4, price: 320, description: "Dal 21 al 25 settembre 320€ (4 notti)" },
  { start: "2025-09-25", end: "2025-09-28", nights: 3, price: 250, description: "Dal 25 al 28 settembre 250€ (3 notti)" },
  
  // OCTOBER
  { start: "2025-09-28", end: "2025-10-05", nights: 7, price: 520, description: "Dal 28 settembre al 5 ottobre 520€ (7 notti)" },
  { start: "2025-09-28", end: "2025-10-02", nights: 4, price: 320, description: "Dal 28 settembre al 2 ottobre 320€ (4 notti)" },
  { start: "2025-10-02", end: "2025-10-05", nights: 3, price: 235, description: "Dal 2 al 5 ottobre 235€ (3 notti)" }
,
    { start: "2025-04-19", end: "2025-04-21", nights: 2, price: 159, description: "over60 Dal 19 al 21 aprile 159€ (2 notti)" },
    { start: "2025-04-21", end: "2025-04-25", nights: 4, price: 249, description: "over60 Dal 21 al 25 aprile 249€ (4 notti)" },
    { start: "2025-04-25", end: "2025-04-27", nights: 2, price: 159, description: "over60 Dal 25 al 27 aprile 159€ (2 notti)" },
    { start: "2025-04-27", end: "2025-05-01", nights: 4, price: 249, description: "over60 Dal 27 aprile al 01 Maggio 249€ (4 notti)" },
    { start: "2025-05-01", end: "2025-05-02", nights: 1, price: 99, description: "over60 Dal 01/5 al 02/5 99€ (1 notte)" },
    { start: "2025-05-01", end: "2025-05-04", nights: 3, price: 249, description: "over60 Dal 01/05 al 04/05 249€ (3 notti)" },
    { start: "2025-05-04", end: "2025-05-08", nights: 4, price: 249, description: "over60 Dal 04/5 al 08/05 249€ (4 notti)" },
    { start: "2025-05-09", end: "2025-05-11", nights: 2, price: 179, description: "over60 Dal 09/05 al 11/05 179€ (2 notti)" },
    { start: "2025-05-11", end: "2025-05-15", nights: 4, price: 249, description: "over60 Dal 11/5 al 15/5 249€ (4 notti)" },
    { start: "2025-05-16", end: "2025-05-18", nights: 2, price: 179, description: "over60 Dal 16/5 al 18/5 179€ (2 notti)" },
    { start: "2025-05-18", end: "2025-05-22", nights: 4, price: 249, description: "over60 Dal 18/5 al 22/5 249€ (4 notti)" },
    { start: "2025-05-23", end: "2025-05-25", nights: 2, price: 179, description: "over60 Dal 23/5 al 25/5 179€ (2 notti)" },
    { start: "2025-05-25", end: "2025-05-29", nights: 4, price: 249, description: "over60 Dal 25/5 al 29/5 249€ (4 notti)" },
    { start: "2025-05-31", end: "2025-06-02", nights: 2, price: 199, description: "over60 Dal 31/5 al 02/6 199€ (2 notti)" },
    { start: "2025-09-12", end: "2025-09-14", nights: 2, price: 300, description: "over60 Dal 12 al 14 settembre (evento giornalisti) 300€ (2 notti)" }

  
];

slots.sort((a, b) => new Date(a.start) - new Date(b.start));

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
}

export function initSlotDropdown(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;

  const wrapper = document.createElement('div');
  const search = document.createElement('input');
  search.placeholder = 'Search slot...';
  search.style.marginBottom = '8px';
  search.style.padding = '5px';
  search.style.width = '100%';
  wrapper.appendChild(search);
  select.parentElement.insertBefore(wrapper, select);

  function renderOptions(filteredSlots) {
    select.innerHTML = '';
    filteredSlots.forEach(slot => {
      const option = document.createElement('option');
      option.value = JSON.stringify(slot);
      option.textContent = slot.description;
      if (slot.nights === 2) option.style.backgroundColor = '#90EE90';
      if (slot.nights === 3) option.style.backgroundColor = '#FFFFE0';
      if (slot.nights === 4) option.style.backgroundColor = '#FFA500';
      if (slot.nights === 7) option.style.backgroundColor = '#FFB6C1';
      select.appendChild(option);
    });
  }

  search.addEventListener('input', e => {
    const term = e.target.value.toLowerCase();
    const filtered = slots.filter(s => s.description.toLowerCase().includes(term));
    renderOptions(filtered);
  });

  renderOptions(slots);
}

export function calculateTotalPrice() {
  const slotSelect = document.getElementById('slotSelect');
  const slot = slotSelect.value ? JSON.parse(slotSelect.value) : null;
  if (!slot || !slot.price) {
    document.getElementById('totalPrice').textContent = '€0.00';
    return;
  }

  const adults = parseInt(document.getElementById('adults')?.value || 0);
  const children = parseInt(document.getElementById('children612')?.value || 0);
  const pet = document.getElementById('pet')?.checked;
  const crib = document.getElementById('crib')?.checked;
  const pool = document.getElementById('pool')?.checked;
  const removeClubCard = document.getElementById('removeClubCard')?.checked;

  let total = 0;

  
  
  if (adults > 2){ 
    total += 2 * slot.price;
    total += (adults - 2) * slot.price * 0.8;
  }
  else{
    total += adults * slot.price;
  }
  total += children * slot.price * 0.5;

  if (!removeClubCard) {
    total += 6 * (adults + children) * slot.nights;
  }

  if (pet) total += 30;
  if (crib) total += 10 * slot.nights;
  if (pool) total += 10 * slot.nights;

  document.getElementById('totalPrice').textContent = `€${total.toFixed(2)}`;
}

export function showConfirmation() {
  const slotSelect = document.getElementById('slotSelect');
  const confirmation = document.getElementById('confirmationMessage');

  if (!slotSelect || !slotSelect.value) {
    if (confirmation) {
      confirmation.textContent = "⚠️ Per favore, seleziona prima uno slot."; // (Show friendly message in Italian)
    }
    return;
  }

  const slot = JSON.parse(slotSelect.value);
  const adults = parseInt(document.getElementById('adults')?.value || "1");
  const children = parseInt(document.getElementById('children612')?.value || "0");
  const totalText = document.getElementById('totalPrice')?.textContent || '€0.00';

  const message = `Prenotazione confermata dal ${formatDate(slot.start)} al ${formatDate(slot.end)}\n` +
    `Persone: ${adults} adulti, ${children} bambini\n` +
    `Prezzo totale: ${totalText}`;

  if (confirmation) {
    confirmation.textContent = message;
  }
}



export function attachFormListeners() {
  document.getElementById('scheduleForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    showConfirmation();
  });

  const inputs = document.querySelectorAll('#scheduleForm input, #scheduleForm select');
  inputs.forEach(i => {
    i.addEventListener('change', calculateTotalPrice);
  });
}

const RoomBooking = { slots, initSlotDropdown, calculateTotalPrice, attachFormListeners, showConfirmation };
export default RoomBooking;