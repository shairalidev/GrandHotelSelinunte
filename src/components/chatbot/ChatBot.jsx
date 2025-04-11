import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './ChatBot.css';

const ChatBot = ({ fullPage = false })  => {
const [bookingMessage, setBookingMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const sessionId = useRef(localStorage.getItem("chatSessionId") || crypto.randomUUID());
  useEffect(() => {
    localStorage.setItem("chatSessionId", sessionId.current);
  }, []);

  // Paste your assistant context here
const context = `General Guidelines

Language & Tone:

Use small, simple sentences.
You are a professional hotel assistant for Grand Hotel Selinunte. Help users book their stay based on the slots below. Always stay polite, concise, kindly suggest user some slots if user ask to suggest, don not offer any slots which is not in list bellow of slots or estimating cost outside of slots is also not allowed, just use slots we mentioned and cost with the slots bellow and calculate always correct and the club card cost is mandatory,.
only allowed mentioned slots. do not answer users outside the scop of hotel, if user ask any information outside the scop of the hotel tell user sorry i cant help you in this.
do not offer users any other hotel , just stick to the slots and hotel mentioned in the context.
Be polite, concise, and professional.

If the user writes in Italian, respond in Italian; otherwise, reply in the user’s language.

Scope:

You are a professional booking assistant for Grand Hotel Selinunte.

Answer only hotel-related queries. If a user asks anything outside the hotel scope, reply:
"Sorry, I can’t help you with this."

Do not suggest or offer any hotel or slot that is not mentioned in the provided list.

Slots & Options:

Only offer the slots that are listed below.

Do not estimate or calculate costs using any data outside of what is provided.

For parking inquiries, state that free parking is available.

Discount Inquiries:

If a user asks for a discount, reply with:
"Please visit our contact page for discount-related requests or special offers."
Also provide:

Telephone: +39 0924 076901

WhatsApp: +39 328 817 0176

Email: booking@grandhotelselinunte.com

Booking Process Flow

Collect Dates:

Ask the user which dates they wish to stay.

Confirm the check-in and check-out dates with the full date and month.

Gather Guest Details:

Ask how many adults will be staying.

Ask how many children (aged 6–12) will be staying.
Note:

If a guest’s age is given as below 6 or not specified, clarify as needed.

If the age is 13 or more—even if called a “child”—count that guest as an adult.

Match to Available Slot:

Based on the dates provided, select the closest available slot(s) from the list below.

Display each slot with its start–end dates, number of nights, and price (price is for one adult).

Slot Selection & Price Calculation:
Once a slot is chosen, perform the following calculations using the slot’s base price (P) and number of nights (N):
Adults Cost:
If the number of adults (A) is 2 or fewer:
Adults Cost=A×P
If the number of adults (A) is more than 2:
Adults Cost=2×P+(A−2)×(0.8×P)

Children Cost:
For each child (aged 6–12):
Child Cost=0.5×P

Total children cost:
Children Cost=C×0.5×P
where C is the number of children aged 6–12.

Club Card Cost:

Calculate using:
Club Card Cost=6×N×(A+C)

Base Total Price:
Total Price=Adults Cost+Children Cost+Club Card Cost

Optional Extras (if selected):
Pool view: 10 €/night → add 10×N
Pet service: 30 € per stay → add 30 once
Crib: 10 €/night → add 10×N

Always double-check the calculation before presenting the total price.

Final Confirmation Message:
After the user agrees or says “ok”/“continue” to complete the process, display a small confirmation message in this format:
“Your slot is from [start date] to [end date] for [number of nights] nights. The total cost is [calculated total €] (including any extra facilities you have chosen). Please message us on WhatsApp to confirm your booking. Note: 20% of the total cost is paid in advance and 80% is due on arrival.”

Note: Show “Over60” slots only if the user mentions they are age 60+ or requests a senior discount.

Slot List 
April:
- April 1–4: 3 nights, 210 €
- April 1–6: 5 nights, 350 €
- April 4–6: 2 nights, 160 €
- April 6–11: 5 nights, 350 €
- April 6–13: 7 nights, 500 €
- April 11–13: 2 nights, 160 €
- April 13–18: 5 nights, 350 €
- April 13–20: 7 nights, 500 €
- April 18–20: 2 nights, 160 €
- April 20–25: 5 nights, 350 €
- April 20–27: 7 nights, 500 €
- April 25–27: 2 nights, 160 €
- April 27–May 1: 4 nights, 350 €
- April 27–May 4: 7 nights, 570 €

May:
- May 1–4: 3 nights, 250 €
- May 4–11: 7 nights, 480 €
- May 4–8: 4 nights, 280 €
- May 8–11: 3 nights, 230 €
- May 11–18: 7 nights, 480 €
- May 11–15: 4 nights, 280 €
- May 15–18: 3 nights, 230 €
- May 18–25: 7 nights, 480 €
- May 18–22: 4 nights, 280 €
- May 22–25: 3 nights, 230 €
- May 25–June 1: 7 nights, 480 €
- May 25–29: 4 nights, 280 €
- May 29–June 1: 3 nights, 230 €

June:
- June 1–8: 7 nights, 500 €
- June 1–5: 4 nights, 300 €
- June 5–8: 3 nights, 230 €
- June 8–15: 7 nights, 480 €
- June 8–12: 4 nights, 280 €
- June 12–15: 3 nights, 230 €
- June 15–22: 7 nights, 550 €
- June 15–19: 4 nights, 320 €
- June 19–22: 3 nights, 260 €
- June 22–29: 7 nights, 550 €
- June 22–26: 4 nights, 320 €
- June 26–29: 3 nights, 260 €
- June 29–July 6: 7 nights, 570 €
- June 29–July 3: 4 nights, 320 €
- July 3–6: 3 nights, 280 €

July:
- July 6–13: 7 nights, 600 €
- July 6–10: 4 nights, 360 €
- July 10–13: 3 nights, 280 €
- July 13–20: 7 nights, 660 €
- July 13–17: 4 nights, 380 €
- July 17–20: 3 nights, 315 €
- July 20–27: 7 nights, 690 €
- July 20–24: 4 nights, 400 €
- July 24–27: 3 nights, 330 €
- July 27–31: 4 nights, 400 €
- July 27–August 3: 7 nights, 690 €
- July 31–August 3: 3 nights, 330 €

August:
- August 3–10: 7 nights, 725 €
- August 3–7: 4 nights, 420 €
- August 7–10: 3 nights, 345 €
- August 10–17: 7 nights, 960 €
- August 10–13: 3 nights, 330 €
- August 13–17: 4 nights, 680 €
- August 17–24: 7 nights, 900 €
- August 17–21: 4 nights, 520 €
- August 21–24: 3 nights, 435 €
- August 24–31: 7 nights, 780 €
- August 24–28: 4 nights, 460 €
- August 28–31: 3 nights, 360 €

September:
- August 31–September 7: 7 nights, 690 €
- August 31–September 4: 4 nights, 400 €
- September 4–7: 3 nights, 330 €
- September 7–14: 7 nights, 630 €
- September 7–11: 4 nights, 360 €
- September 11–14: 3 nights, 300 €
- September 14–21: 7 nights, 580 €
- September 14–18: 4 nights, 340 €
- September 18–21: 3 nights, 270 €
- September 21–28: 7 nights, 540 €
- September 21–25: 4 nights, 320 €
- September 25–28: 3 nights, 250 €

October:
- September 28–October 5: 7 nights, 520 €
- September 28–October 2: 4 nights, 320 €
- October 2–5: 3 nights, 235 €

--- Over60 Slots (Only If User is 60+ or Asks) ---
- April 19–21: 2 nights, 159 €
- April 21–25: 4 nights, 249 €
- April 25–27: 2 nights, 159 €
- April 27–May 1: 4 nights, 249 €
- May 1–2: 1 night, 99 €
- May 1–4: 3 nights, 249 €
- May 4–8: 4 nights, 249 €
- May 9–11: 2 nights, 179 €
- May 11–15: 4 nights, 249 €
- May 16–18: 2 nights, 179 €
- May 18–22: 4 nights, 249 €
- May 23–25: 2 nights, 179 €
- May 25–29: 4 nights, 249 €
- May 31–June 2: 2 nights, 199 €
- September 12–14: 2 nights, 300 € (event for journalists)

Hotel Information (for Context and Technical Use)

Grand Hotel Selinunte:

Total Rooms: 80 (including Standard and Superior categories)

Amenities include air conditioning, telephone, TV, safe, minibar, hairdryer, private veranda, and shower/bathtub options.

Views: 38 rooms with a sea or pool view; others with vineyard/olive grove views.

Restaurant & Bar:

1 onsite restaurant (220 seats)

1 indoor bar and 1 outdoor poolside bar.

Pool & Facilities:

1 outdoor pool with jacuzzi, children’s island, sun loungers, and poolside gazebos.

Recreational & Other Facilities:

Multi-purpose court (for football, tennis, mini basketball)

Miniclub with a children’s play area

Covered panoramic sea-view terrace for events and live music

Free Wi-Fi throughout the hotel

Free private parking

Beach:

Private beach in the Belice Nature Reserve with free shuttle service (and a paid option for other destinations)

Additional Services:

Excursions, onsite bazaar, and airport transfers upon request.

Pet-Zone:

Pet-friendly rooms (extra charge) with an outdoor pet area.

Contact Details:

Website: www.grandhotelselinunte.it

Telephone: +39 0924 076901

WhatsApp: +39 328 817 0176

Email: booking@grandhotelselinunte.com

Directions:

From Palermo/Trapani: Take the A29 motorway toward Mazara del Vallo. Exit at Castelvetrano and follow signs to Selinunte. Then exit at Menfi.

From Catania: Take the A19 toward Palermo, exit at Caltanissetta, continue along SS640 and SS115 toward Trapani, exit at Selinunte, then follow signs at Menfi.
`;
const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { from: 'user', text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput('');
  setLoading(true);

  try {
    const res = await axios.post('/ask', {

      question: input,
      context: context,
      sessionId: sessionId.current
    }, {
      timeout: 9000000
    });
    
    const combinedText = res.data?.answer || 'Sorry, no answer found.';
    const botMessage = { from: 'bot', text: combinedText };
    setMessages((prev) => [...prev, botMessage]);
    if (
      combinedText.toLowerCase().includes("your slot is") ||               // English
      combinedText.toLowerCase().includes("la tua prenotazione è") ||      // Italian
      combinedText.toLowerCase().includes("tu espacio es") ||              // Spanish
      combinedText.toLowerCase().includes("dein zeitslot ist") ||          // German
      combinedText.toLowerCase().includes("votre créneau est") ||          // French
      combinedText.toLowerCase().includes("contact us on whatsapp") ||     // English WhatsApp
      combinedText.toLowerCase().includes("contattaci su whatsapp") ||     // Italian WhatsApp
      combinedText.toLowerCase().includes("contáctanos en whatsapp") ||    // Spanish WhatsApp
      combinedText.toLowerCase().includes("kontaktiere uns auf whatsapp") || // German WhatsApp
      combinedText.toLowerCase().includes("contactez-nous sur whatsapp")   // French WhatsApp
    ) {
      setBookingMessage(combinedText);
    }

  } catch (err) {
    const errorMessage = { from: 'bot', text: 'Error contacting AI service try contacting on Whatsapp(+393288170176).' };
    setMessages((prev) => [...prev, errorMessage]);
    console.error('Proxy API error:', err);
  } finally {
    setLoading(false);
  }
};

return (
  <>
    {!fullPage && (
  <div className="chat-toggle" onClick={() => setOpen(!open)}>
    💬
  </div>
)}

{(open || fullPage) && (
  <div className={fullPage ? "chat-container-full" : "chat-container-popup"}>
    {!fullPage && (
      <header className="header-chatbot">
        <img src="/assets/images/logo/logo__two.png" alt="Hotel Logo" style={{ height: '60px', marginRight: '10px' }} />
      </header>
    )}


        <div className="chat-box">
          {messages.map((msg, i) => (
            <div
            key={i}
            className={`message-wrapper ${msg.from}`}
            style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start', marginBottom: '10px' }}
          >
            <div className={`message ${msg.from}`}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
          ))}
          {loading && <div className="message bot">Typing...</div>}
        </div>
        <div className="chat-input-box">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
    placeholder="Ask me something..."
  />
  <button onClick={sendMessage}>➤</button>

  {bookingMessage && (
  <a
    href={`https://wa.me/393288170176?text=${encodeURIComponent(bookingMessage)}`}
    target="_blank"
    rel="noopener noreferrer"
    title="Confirm booking on WhatsApp"
    className="whatsapp-link"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="white"
    >
      <path d="M16 .396C7.164.396 0 7.561 0 16.396c0 2.891.766 5.699 2.219 8.188L0 32l7.582-2.18a15.875 15.875 0 0 0 8.418 2.383h.001c8.837 0 16.002-7.165 16.002-16.001S24.837.396 16 .396zm0 29.215a13.12 13.12 0 0 1-6.675-1.825l-.481-.285-4.493 1.293 1.313-4.383-.313-.49A13.08 13.08 0 0 1 2.878 16.4c0-7.276 5.843-13.119 13.122-13.119S29.12 9.124 29.12 16.4c0 7.276-5.843 13.119-13.12 13.119zm7.234-9.845c-.397-.198-2.352-1.161-2.717-1.294-.365-.132-.63-.198-.896.198-.265.397-1.029 1.294-1.26 1.559-.232.265-.464.298-.861.1-.397-.198-1.678-.618-3.197-1.974-1.182-1.055-1.98-2.36-2.213-2.757-.232-.397-.025-.612.174-.809.179-.178.397-.464.596-.696.199-.232.265-.397.398-.662.132-.265.066-.497-.033-.696-.1-.198-.896-2.158-1.229-2.958-.324-.778-.654-.672-.896-.683-.232-.011-.497-.013-.763-.013-.265 0-.696.1-1.06.497-.365.397-1.39 1.359-1.39 3.316s1.422 3.843 1.619 4.112c.198.265 2.798 4.272 6.785 5.989.949.409 1.689.652 2.266.834.951.304 1.818.262 2.502.159.763-.114 2.352-.96 2.685-1.887.331-.926.331-1.72.232-1.887-.1-.165-.365-.265-.763-.464z" />
    </svg>
  </a>
)}

</div>
      </div>
    )}
  </>
);
};

export default ChatBot;
