require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 3000;
const { createServer } = require('http');
const { Server } = require('socket.io');
const generateResponse = require('./src/services/ai.service');

const httpServer = createServer(app);
const io = new Server(
  httpServer,
  {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:5173',
      methods: ['GET', 'POST'],
    },
  }
);

io.on('connection', (socket) => {
  console.log('A user Connected');
  const chatHistory = [];

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  socket.on('clear-chat-history', () => {
    chatHistory.length = 0;
  });

  socket.on('ai-message', async (data) => {
    const prompt = typeof data === 'string' ? data.trim() : data?.prompt?.trim();

    if (!prompt) {
      socket.emit('ai-message-response', {
        response: 'Prompt is empty. Please send a valid message.',
      });
      return;
    }

    console.log('Received AI message:', prompt);

    chatHistory.push({
      role: 'user',
      parts: [{ text: prompt }],
    });

    try {
      const response = await generateResponse(chatHistory);

      chatHistory.push({
        role: 'model',
        parts: [{ text: response }],
      });

      socket.emit('ai-message-response', { response });
    } catch (error) {
      console.error('AI response error:', error.message);
      socket.emit('ai-message-response', {
        response: 'Something went wrong while generating the response.',
      });
    }
  });
});

httpServer.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
