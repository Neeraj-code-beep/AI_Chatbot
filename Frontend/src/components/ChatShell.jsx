import { motion } from 'framer-motion'
import { Bot, RefreshCcw, Sparkles } from 'lucide-react'
import { useChat } from '../hooks/useChat'
import { suggestions } from '../data/suggestions'
import { ChatComposer } from './ChatComposer'
import { ChatMessageList } from './ChatMessageList'

export function ChatShell() {
  const { messages, isConnected, isThinking, error, sendMessage, clearChat } =
    useChat()

  return (
    <main className="min-h-screen bg-[#edf3ef] text-[#16201d]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-[#cad8d0] pb-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f3d35] text-white shadow-lg shadow-[#0f3d35]/20"
              initial={{ rotate: -8, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 15 }}
            >
              <Bot size={25} />
            </motion.div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#267064]">
                AI Chatbot
              </p>
              <h1 className="text-2xl font-bold tracking-normal text-[#101817] sm:text-3xl">
                Chat with your backend
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cad8d0] bg-white/70 px-3 py-2 text-sm font-medium text-[#314640]">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isConnected ? 'bg-[#2f9e74]' : 'bg-[#d56a4a]'
                }`}
              />
              {isConnected ? 'Connected' : 'Offline'}
            </span>
            <button
              type="button"
              onClick={clearChat}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#b9cbc2] bg-white px-3 text-sm font-semibold text-[#21332f] transition hover:border-[#267064] hover:text-[#0f3d35] focus:outline-none focus:ring-2 focus:ring-[#267064]/30"
              aria-label="Clear chat"
            >
              <RefreshCcw size={16} />
              Reset
            </button>
          </div>
        </header>

        <section className="grid flex-1 gap-4 py-4 lg:grid-cols-[280px_1fr]">
          <aside className="hidden border-r border-[#cad8d0] pr-4 lg:block">
            <div className="sticky top-4 space-y-5">
              <div className="rounded-lg border border-[#cad8d0] bg-white/75 p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#0f3d35]">
                  <Sparkles size={17} />
                  Quick Prompts
                </div>
                <div className="space-y-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      disabled={isThinking}
                      className="w-full rounded-lg border border-[#d5e0da] bg-[#f8fbf8] px-3 py-2 text-left text-sm font-medium text-[#314640] transition hover:border-[#267064] hover:bg-white disabled:opacity-55"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-[#0f3d35] p-4 text-sm leading-6 text-[#dcebe5] shadow-lg shadow-[#0f3d35]/15">
                Your backend stays as it is. The frontend talks through
                Socket.IO and keeps all connection code inside the API folder.
              </div>
            </div>
          </aside>

          <div className="flex min-h-[calc(100vh-124px)] flex-col overflow-hidden rounded-lg border border-[#cad8d0] bg-[#f8fbf8] shadow-xl shadow-[#3b5249]/10">
            {error ? (
              <div className="border-b border-[#f0c9ba] bg-[#fff5ef] px-4 py-3 text-sm font-medium text-[#954927]">
                {error}
              </div>
            ) : null}

            <ChatMessageList messages={messages} isThinking={isThinking} />
            <ChatComposer onSend={sendMessage} disabled={isThinking} />
          </div>
        </section>
      </div>
    </main>
  )
}
