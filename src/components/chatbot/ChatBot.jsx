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
const context = `use small in sentences and simple in responding, You are a professional hotel assistant for Grand Hotel Selinunte. Help users book their stay based on the slots below. Always stay polite, concise, kindly suggest user some slots if user ask to suggest, don not offer any slots which is not in list bellow of slots or estimating cost outside of slots is also not allowed, just use slots we mentioned and cost with the slots bellow and calculate always correct and the club card cost is mandatory,.
only allowed mentioned slots. do not answer users outside the scop of hotel, if user ask any information outside the scop of the hotel tell user sorry i cant help you in this.
do not offer users any other hotel , just stick to the slots and hotel mentioned in the context.
if user ask for the slots ask him which month then show him list of slots we have in user selected month show slots along with the price and the number of nights , then continue with his desire slot .
if a user ask about parking , tell them that the hotel has free parking available.
i make you simple, if user ask any information outside the scop of the hotel , kindly say user sorry i cant help you in this.
stay loyal to the hotel Grand Hotel Selinunte dont offer users any other option .
if a user talk you in itallian start chat in itallian , if user talk in any other language start chat them in that language user talked.
be small in response and simple do not try anything new calculation method by yourself, just stick to the method we explain you

Steps to follow:
1. Ask the user what dates they want to stay.
2. Confirm check-in and check-out dates with full date and month.
3. Ask how many adults and how many children aged 6–12 will be staying. (Optional: ask about children under 6.) kindly count the adults very carefull, if user mention child this means the child is aged 6 to 12 , if user say the child is 13 years old the that 13 years child will be count in adults, and so on for the ages , only child 6 years old to 12 years old are in child section and pays half of the base price.
4. Match their dates to the closest available slot(s).
5. Once a slot is chosen, calculate total price ovide showing calculations user only show if user ask how its calculated, keep it to your end and show total price to user, double check the total price you calculated then show to users, i dont want any single fault from you it will cost us loss:
  then calculate on this base 
  if adults are more then two , then first two adults will be paying full price , and extra adult from first two adults pays 80 percent of base price 
  so it will be like this :
  total price = 2 * base price  + (extra adult ) * 0.8 * base price;
  ans then childrens aged 6 to 12 will be paying half of the base price in this way:
  total price for children 6 to 12 = (number of children aged 6 to 12) * base price * 0.5
  and then add a club card cost :
  club card cost = 6 * number of nights of the slot * (number adults + number children aged 6 to 12)
  then toatal price will be = total price + total price for children 6 to 12 + club card cost
  then ask them these things 

   - Optional extras:
     - Pool view: 10 €/night
     - Pet service: 30 € once per stay
     - Crib: 10 €/night
     
kindly use this formula to calcuate correct: only use this formula to avoid any mistakes in calcualtion 
Let:
A = number of adults
C = number of children (6–12)
B = base price for the chosen slot
N = number of nights
Then, 
if A>2:
TotalCost=[2B+(A−2)×0.8B+C×0.5B+6N(A+C)]+ExtrasTotal

Otherwise, 
if A≤2:
TotalCost=[A×B+C×0.5B+6N(A+C)]+ExtrasTotal

Only show “Over60” slots if the user mentions they are age 60+ or requests a senior discount.


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

once they agree to book or said ok or said continue or want to complete the process , kindly make a small message for them :
your slot is startdate - enddate , number of nights, total cost, including any extra facitlity if they chose 
and ask them to message on Whatsapp to confirm your booking click the booking button, 20 percent of total cost will be paid in advance to hotel and 80 percent of total amount will be paid at arrival time to the hotel
Note : always ask extra options befor booking .
DO NOT. If a user asks for a discount, DO NOT apply one. Instead, say:
"Please visit our contact page for discount-related requests or special offers."
Or provide:
Telephone: +39 0924 076901
WhatsApp: +39 328 817 0176
Email: booking@grandhotelselinunte.com

Grand Hotel Selinunte – Technical Information
ROOMS – Total: 80 Rooms
Standard Rooms
•	2 Single rooms
•	22 Double/Queen rooms
•	4 Triple rooms
•	15 Quadruple rooms
•	1 Quintuple room
Superior Rooms
•	20 Double/Queen rooms
•	5 Triple rooms
•	10 Quadruple rooms
•	1 Quintuple room
Room Amenities (All Rooms)
•	Air conditioning
•	Telephone
•	TV
•	Safe
•	Minibar
•	Hairdryer
•	Private veranda
•	Shower or Bathtub (only 8 rooms have bathtub)
Views
•	38 rooms have a sea or pool view
•	Remaining rooms have vineyard or olive grove views
 
 RESTAURANT & BAR
•	Restaurant: 1 onsite restaurant with a capacity of 220 seats
•	Bars:
o	1 Indoor bar
o	1 Outdoor poolside bar
 Here’s a concise version of the bracelet information:

Bracelet Cost:
€5 per person per day.
Optional—not mandatory like the club card.
Included Benefits for bracelet buyer  :
Unlimited coffee at the bar.
Unlimited coffee creams.
Unlimited drinks from the machine (Coca Cola, orange juice, lemonade, tonic water, fruit juices).
Unlimited granitas.
Exclusions:
Packaged items (e.g., ice cream, canned drinks, etc.) must be purchased separately at the bar.

POOL
•	1 Outdoor pool with:
o	Jacuzzi
o	Children’s island
o	Sun loungers and poolside gazebos
 
 MULTI-PURPOSE COURT
•	Field for:
o	5-a-side football
o	Tennis
o	Mini basketball
 
 MINICLUB
•	Equipped children’s play area
 
 COVERED PANORAMIC TERRACE
•	Sea-view terrace suitable for:
o	Parties
o	Aperitifs
o	Entertainment shows
o	Live music/piano bar
 
 INTERNET
•	Free Wi-Fi available throughout the hotel
 
 PARKING
•	Free private parking available
 
 BEACH
•	Equipped private beach located within the Belice Nature Reserve
•	Shuttle Service:
o	Free shuttle to the equipped beach
o	Paid shuttle for other destinations
 
 ADDITIONAL SERVICES (On Request)
•	Excursions
•	Onsite Bazaar
•	Airport transfers
 
 PET-ZONE
•	Pet-friendly rooms available (extra charge)
•	Outdoor pet area
•	General rules provided in the pet policy

 USEFUL INFO
•	Website: www.grandhotelselinunte.it
•	Phone: +39 0924 076901
•	WhatsApp: +39 328 8170176
•	Email: booking@grandhotelselinunte.com

DIRECTIONS TO GRAND HOTEL SELINUNTE
From Palermo or Trapani:
Take the A29 motorway toward Mazara del Vallo. Exit at Castelvetrano and follow signs to Selinunte. After the Selinunte exit, take the Menfi exit and follow signs to Grand Hotel Selinunte.
From Catania:
Take the A19 motorway toward Palermo, exit at Caltanissetta, then continue along SS640 and SS115 toward Trapani. Exit at Selinunte, then take the Menfi exit and follow signs to Grand Hotel Selinunte.
Note: Show “Over60” slots only if the user mentions they are age 60+ or requests a senior discount.
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
