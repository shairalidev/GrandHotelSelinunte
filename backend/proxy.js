const express = require('express');
const cors = require('cors');
const { InferenceClient } = require('@huggingface/inference');

const app = express();
app.use(cors());
app.use(express.json());

const client = new InferenceClient("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");

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
    const chatCompletion = await client.chatCompletion({
      provider: "nebius",
      model: "deepseek-ai/DeepSeek-V3-0324",
      messages,
      max_tokens: 1000,
    });

    const reply = chatCompletion?.choices?.[0]?.message;

    // Store assistant response in memory
    messages.push({ role: "assistant", content: reply.content });

    res.json({ answer: reply.content });
  } catch (error) {
    console.error("DeepSeek HF Proxy Error:", error);
    res.status(500).json({ error: "Failed to get response from AI." });
  }
});

app.listen(5000, () => {
  console.log('✅ Hugging Face Proxy running on http://localhost:5000');
});
