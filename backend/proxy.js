const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // ← Put your key in .env

const sessionMemory = new Map();

app.post('/ask', async (req, res) => {
  const { question, context, sessionId } = req.body;

  if (!sessionMemory.has(sessionId)) {
    sessionMemory.set(sessionId, [
      { role: "system", content: context || "You are a helpful hotel assistant." }
    ]);
  }

  const messages = sessionMemory.get(sessionId);
  messages.push({ role: "user", content: question });

  try {
    console.log("➡️ Calling Gemini AI...");

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: messages.map(m => ({
        role: m.role === 'system' ? 'user' : m.role,
        parts: [{ text: m.content }]
      }))
    });

    const result = await chat.sendMessage(question);
    const reply = result.response.text();

    messages.push({ role: "assistant", content: reply });

    res.json({ answer: reply });
  } catch (err) {
    console.error("❌ Gemini Proxy Error:", err.message);
    res.status(500).json({ error: "Failed to get response from Gemini AI." });
  }
});

app.listen(5000, () => {
  console.log('✅ Gemini Proxy running on http://localhost:5000');
});
