import { io } from 'socket.io-client'

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000'

let socket

export function getChatSocket() {
  if (!socket) {
    socket = io(SOCKET_URL, {
      transports: ['websocket', 'polling'],
      autoConnect: false,
    })
  }

  return socket
}

export function connectChatSocket({ onConnect, onDisconnect, onResponse, onError }) {
  const activeSocket = getChatSocket()

  activeSocket.on('connect', onConnect)
  activeSocket.on('disconnect', onDisconnect)
  activeSocket.on('connect_error', onError)
  activeSocket.on('ai-message-response', onResponse)

  if (!activeSocket.connected) {
    activeSocket.connect()
  }

  return () => {
    activeSocket.off('connect', onConnect)
    activeSocket.off('disconnect', onDisconnect)
    activeSocket.off('connect_error', onError)
    activeSocket.off('ai-message-response', onResponse)
  }
}

export function sendChatMessage(prompt) {
  getChatSocket().emit('ai-message', prompt)
}

export function clearChatHistory() {
  getChatSocket().emit('clear-chat-history')
}
