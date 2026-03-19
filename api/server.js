const express = require('express');
const cors = require('cors');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');
const blueprintContext = require('./blueprint-context');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS — allow static site origin
app.use(cors({ origin: true }));
app.use(express.json());

// Serve static files from parent directory (for combined deploy)
app.use(express.static(path.join(__dirname, '..')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'verito-ev-ai-guide' });
});

// Chat endpoint — Anthropic Claude
app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'AI Guide is not configured. Add ANTHROPIC_API_KEY in Render dashboard.',
      hint: 'Get a key at console.anthropic.com'
    });
  }

  const { message, history = [] } = req.body;
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const anthropic = new Anthropic({ apiKey });
    const messages = [
      ...history.map((m) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content
      })),
      { role: 'user', content: message }
    ];

    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-latest',
      max_tokens: 1024,
      system: blueprintContext,
      messages
    });

    const textBlock = response.content.find((b) => b.type === 'text');
    const reply = textBlock ? textBlock.text : 'I could not generate a response.';

    res.json({ reply });
  } catch (err) {
    console.error('Anthropic API error:', err.message);
    const status = err.status === 401 ? 401 : err.status === 429 ? 429 : 500;
    res.status(status).json({
      error: err.message || 'Failed to get AI response',
      hint: status === 401 ? 'Check ANTHROPIC_API_KEY' : 'Try again later'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Verito EV AI Guide running on port ${PORT}`);
});
