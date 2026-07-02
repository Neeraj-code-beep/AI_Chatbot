import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, UserRound } from 'lucide-react'

export function ChatMessageList({ messages, isThinking }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isThinking])

  return (
    <div className="chat-scroll flex-1 overflow-y-auto px-4 py-5 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </AnimatePresence>

        {isThinking ? <ThinkingMessage /> : null}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}

function ChatMessage({ message }) {
  const isUser = message.role === 'user'

  return (
    <motion.article
      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.22 }}
    >
      {!isUser ? <Avatar type="assistant" /> : null}
      <div
        className={`max-w-[82%] rounded-lg px-4 py-3 text-left text-sm leading-6 shadow-sm sm:max-w-[72%] ${
          isUser
            ? 'bg-[#267064] text-white'
            : 'border border-[#d5e0da] bg-white text-[#21332f]'
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
      </div>
      {isUser ? <Avatar type="user" /> : null}
    </motion.article>
  )
}

function Avatar({ type }) {
  const isUser = type === 'user'

  return (
    <div
      className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
        isUser ? 'bg-[#dcebe5] text-[#0f3d35]' : 'bg-[#0f3d35] text-white'
      }`}
    >
      {isUser ? <UserRound size={18} /> : <Bot size={18} />}
    </div>
  )
}

function ThinkingMessage() {
  return (
    <motion.div
      className="flex gap-3"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Avatar type="assistant" />
      <div className="rounded-lg border border-[#d5e0da] bg-white px-4 py-3 shadow-sm">
        <div className="flex h-6 items-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-2 w-2 rounded-full bg-[#267064]"
              animate={{ y: [0, -5, 0], opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.12 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
