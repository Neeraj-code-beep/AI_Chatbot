import { useState } from 'react'
import { motion } from 'framer-motion'
import { SendHorizontal } from 'lucide-react'

export function ChatComposer({ onSend, disabled }) {
  const [prompt, setPrompt] = useState('')

  const submitPrompt = () => {
    const cleanPrompt = prompt.trim()

    if (!cleanPrompt || disabled) {
      return
    }

    onSend(cleanPrompt)
    setPrompt('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      submitPrompt()
    }
  }

  return (
    <form
      className="border-t border-[#cad8d0] bg-white p-3 sm:p-4"
      onSubmit={(event) => {
        event.preventDefault()
        submitPrompt()
      }}
    >
      <div className="mx-auto flex max-w-3xl items-end gap-3">
        <label className="sr-only" htmlFor="chat-prompt">
          Message
        </label>
        <textarea
          id="chat-prompt"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Ask your AI chatbot..."
          className="max-h-40 min-h-12 flex-1 resize-none rounded-lg border border-[#b9cbc2] bg-[#f8fbf8] px-4 py-3 text-sm leading-6 text-[#16201d] outline-none transition placeholder:text-[#70847d] focus:border-[#267064] focus:bg-white focus:ring-4 focus:ring-[#267064]/10"
        />
        <motion.button
          type="submit"
          disabled={disabled || !prompt.trim()}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0f3d35] text-white shadow-lg shadow-[#0f3d35]/20 transition hover:bg-[#15574c] focus:outline-none focus:ring-4 focus:ring-[#267064]/25 disabled:bg-[#9ab7ae] disabled:shadow-none"
          aria-label="Send message"
          whileTap={{ scale: 0.94 }}
        >
          <SendHorizontal size={20} />
        </motion.button>
      </div>
    </form>
  )
}
