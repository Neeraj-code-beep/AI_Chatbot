import { useEffect, useState } from 'react'
import { clearChatHistory, connectChatSocket, sendChatMessage } from '../api/chatApi'

const welcomeMessage = {
  id: 'welcome',
  role: 'assistant',
  content: 'Hey, I am ready. Ask me anything and I will keep the answer clean.',
  createdAt: new Date().toISOString(),
}

function createMessage(role, content) {
  return {
    id: `${role}-${Date.now()}-${crypto.randomUUID()}`,
    role,
    content,
    createdAt: new Date().toISOString(),
  }
}

export function useChat() {
  const [messages, setMessages] = useState([welcomeMessage])
  const [isConnected, setIsConnected] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const cleanup = connectChatSocket({
      onConnect: () => {
        setIsConnected(true)
        setError('')
      },
      onDisconnect: () => setIsConnected(false),
      onError: () => {
        setIsConnected(false)
        setIsThinking(false)
        setError('Backend connection failed. Start the backend on port 3000.')
      },
      onResponse: (payload) => {
        const response = payload?.response || 'No response received.'
        setMessages((current) => [...current, createMessage('assistant', response)])
        setIsThinking(false)
      },
    })

    return cleanup
  }, [])

  const sendMessage = (prompt) => {
    const cleanPrompt = prompt.trim()

    if (!cleanPrompt || isThinking) {
      return
    }

    setMessages((current) => [...current, createMessage('user', cleanPrompt)])
    setIsThinking(true)
    setError('')
    sendChatMessage(cleanPrompt)
  }

  const clearChat = () => {
    setMessages([welcomeMessage])
    setError('')
    clearChatHistory()
  }

  return {
    messages,
    isConnected,
    isThinking,
    error,
    sendMessage,
    clearChat,
  }
}
