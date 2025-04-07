import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const sessionId = useRef(localStorage.getItem("chatSessionId") || crypto.randomUUID());
  useEffect(() => {
    localStorage.setItem("chatSessionId", sessionId.current);
  }, []);

  // Paste your assistant context here
  const context = `You are a professional hotel assistant for Grand Hotel Selinunte. Help users book their stay based on the slots below. Always stay polite, concise, and helpful.

DO NOT disclose how prices are calculated or show internal logic. If a user asks for a discount, DO NOT apply one. Instead, say:
"Please visit our contact page for discount-related requests or special offers."
Or provide:
Telephone: +39 0924 076901
WhatsApp: +39 328 817 0176
Email: booking@grandhotelselinunte.com

Steps to follow:
1. Ask the user what dates they want to stay.
2. Confirm check-in and check-out dates with full date and month.
3. Ask how many adults and how many children aged 6–12 will be staying. (Optional: ask about children under 6.)
4. Match their dates to the closest available slot(s).
5. Once a slot is chosen, calculate total price:
   - First 2 adults: 100% of base price
   - Additional adults: 80%
   - Children (6–12): 50%
   - Children under 6: free
   - Club card: 6 € per night per paying person (adults + paying children)
   - Optional extras:
     - Pool view: 10 €/night
     - Pet service: 30 € once per stay
     - Crib: 10 €/night
6. Determine room type based on paying guests:
   - 1 → single
   - 2 → double
   - 3 → triple
   - 4 → quadruple
   - 5+ → five-person room
7. Present a clear summary:
   “Your stay from [start] to [end] includes [X] nights. The total price is [X] €. Room type: [type]. Would you like to proceed with this booking?”

Only show “Over60” slots if the user mentions they are age 60+ or requests a senior discount.
--- SLOTS LIST ---

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
- September 12–14: 2 nights, 300 € (event for journalists)`;
const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { from: 'user', text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput('');
  setLoading(true);

  try {
    const res = await axios.post('http://34.247.46.239:5000/ask', {
      question: input,
      context: context,
      sessionId: sessionId.current
    }, {
      timeout: 60000
    });

    const combinedText = res.data?.answer || 'Sorry, no answer found.';
    const botMessage = { from: 'bot', text: combinedText };
    setMessages((prev) => [...prev, botMessage]);

  } catch (err) {
    const errorMessage = { from: 'bot', text: 'Error contacting AI service.' };
    setMessages((prev) => [...prev, errorMessage]);
    console.error('Proxy API error:', err);
  } finally {
    setLoading(false);
  }
};

return (
  <>
    <div
      className="chat-toggle"
      onClick={() => setOpen(!open)}
    >
      💬
    </div>

    {open && (
      <div className="chat-container-popup">
        <header className='header-chatbot'>Hotel Chat Assistant</header>
        <div className="chat-box">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${msg.from}`}
              style={{
                alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '8px'
              }}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
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
        </div>
      </div>
    )}
  </>
);
};

export default ChatBot;
