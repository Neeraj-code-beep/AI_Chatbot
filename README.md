# 🤖 AI Chatbot

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-black)
![Socket.io](https://img.shields.io/badge/RealTime-Socket.io-white)
![Framer Motion](https://img.shields.io/badge/UI-Framer_Motion-purple)
![AI](https://img.shields.io/badge/AI-Google_Gemini-orange)
![Vite](https://img.shields.io/badge/Bundler-Vite-yellow)

An interactive **AI-powered real-time chatbot application** built with **React, Node.js, Express, and Socket.io**.

The application enables users to have smooth, real-time conversations with an AI assistant while maintaining a **short-term conversation history** to provide context-aware responses.

---

# 🚀 Project Overview

This project was built to explore:

- Real-time communication using **Socket.io**
- Integrating **Generative AI APIs**
- Managing **chat history and conversational context**
- Building a responsive and animated chat interface

The chatbot provides a seamless messaging experience with AI-generated responses and smooth UI interactions.

---

# ✨ Features

- 🤖 AI-powered conversations
- ⚡ Real-time communication using Socket.io
- 🧠 Short-term chat memory for contextual responses
- 💬 Instant message streaming between client and server
- 🎨 Smooth animations using Framer Motion
- 📱 Responsive user interface
- 🔄 Persistent chat flow during a session

---

# 🧠 How It Works

1. User sends a message from the React frontend.
2. Message is sent to the backend through **Socket.io**.
3. Backend stores the message in the current session's chat history.
4. AI model receives the conversation context.
5. AI generates a response.
6. Response is emitted back to the frontend in real time.
7. Chat UI updates instantly with animations.

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Framer Motion
- Socket.io Client
- CSS / TailwindCSS (if used)

## Backend

- Node.js
- Express.js
- Socket.io
- Google Gemini API

---

# 📂 Project Structure

```text
AI-Chatbot
│
├── Backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   ├── sockets
│   │   └── utils
│   │
│   ├── server.js
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── context
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json
```

---

# 🎯 Current Features

- Real-time AI chat
- Session-based short-term memory
- Context-aware responses
- Responsive chat interface
- Smooth message animations
- Socket-based communication

---

# ⚠️ Current Limitations

- No authentication system
- Chat history is not permanently stored
- Single-session memory only
- No multi-user chat rooms yet
- Limited long-term memory capabilities

---

# 🔮 Future Plans

Planned improvements include:

- User authentication
- Database integration for chat persistence
- Multi-chat sessions
- Long-term memory implementation
- Message streaming effects
- AI agents and tool calling
- File upload and image understanding
- Voice-based conversations
- Chat export functionality

---

# ⚙️ Running the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI_Chatbot.git
```

---

## 2. Navigate to the Project

```bash
cd AI_Chatbot
```

---

# 🔧 Backend Setup

Navigate to backend:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm run dev
```

or

```bash
node server.js
```

Backend server will start at:

```text
http://localhost:3000
```

---

# 🎨 Frontend Setup

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the Backend folder:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=3000
CLIENT_URL=http://localhost:5173
```

> ⚠️ Never commit your `.env` file or API keys to GitHub.

---

# 📡 Socket Flow

```text
Client Message
      ↓
Socket.io Connection
      ↓
Express Server
      ↓
Chat History Management
      ↓
Gemini API
      ↓
AI Response
      ↓
Socket Emit
      ↓
Frontend Update
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 💖 Contributors

Thanks to all the amazing people who contribute to **AI Chatbot** 🚀

<p align="center">
  <a href="https://github.com/Neeraj-code-beep/AI_Chatbot/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=Neeraj-code-beep/AI_Chatbot" alt="Contributors"/>
  </a>
</p>

---

## ⭐ Project Support

<p align="center">
  <a href="https://github.com/Neeraj-code-beep/AI_Chatbot/stargazers">
    <img src="https://img.shields.io/github/stars/Neeraj-code-beep/AI_Chatbot?style=social" alt="Stars">
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/Neeraj-code-beep/AI_Chatbot/network/members">
    <img src="https://img.shields.io/github/forks/Neeraj-code-beep/AI_Chatbot?style=social" alt="Forks">
  </a>
</p>

---

# 👨‍💻 Author

**Neeraj Mishra**

This project was built to explore:

- Real-time Systems
- Socket.io
- Generative AI
- Full Stack Development
- Context Management in AI Applications

---

# ⭐ Support

If you like this project, consider giving it a **⭐ Star on GitHub**.

Happy Coding 🚀
