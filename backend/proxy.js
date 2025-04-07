const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 Session memory: { sessionId: [{role, content}, ...] }
const sessionMemory = new Map();

app.post('/ask', async (req, res) => {
  const { question, context, sessionId } = req.body;

  // Create memory if this is a new session
  if (!sessionMemory.has(sessionId)) {
    sessionMemory.set(sessionId, [
      {
        role: "system",
        content: context || "You are a helpful hotel assistant."
      }
    ]);
  }

  const messages = sessionMemory.get(sessionId);

  // Add user question to memory
  messages.push({ role: "user", content: question });

  try {
    const response = await axios.post('http://localhost:11434/api/chat', {
      model: "tinyllama:chat",
      messages: messages,
      stream: false
    });

    const reply = response.data.message.content;

    // Store assistant response in memory
    messages.push({ role: "assistant", content: reply });

    res.json({ answer: reply });
  } catch (error) {
    console.error("Ollama Proxy Error:", error.message);
    res.status(500).json({ error: "Failed to get response from local AI." });
  }
});

app.listen(5000, () => {
  console.log('✅ Ollama Proxy running on http://localhost:5000');
});
