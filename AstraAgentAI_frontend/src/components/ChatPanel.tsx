import { useState } from 'react'
import type { ChatMessage } from '../types'
import { agents } from '../data/agents'
import './ChatPanel.css'

interface ChatPanelProps {
  selectedAgentId?: string
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content:
      'Hello! I\'m AstraAgent. Choose an agent from the sidebar or type a message to get started.',
    timestamp: new Date(),
  },
]

export function ChatPanel({ selectedAgentId }: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState('')

  const activeAgent = agents.find((a) => a.id === selectedAgentId)

  function handleSend(e: React.FormEvent) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    }

    const reply: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: activeAgent
        ? `${activeAgent.name} received your message: "${text}". Connect the backend API to enable real responses.`
        : `I received: "${text}". Select an agent or connect your backend to enable full AI capabilities.`,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg, reply])
    setInput('')
  }

  return (
    <div className="chat-panel">
      <header className="chat-panel__header">
        <div>
          <h1 className="page-header__title">
            {activeAgent ? activeAgent.name : 'Agent Chat'}
          </h1>
          <p className="page-header__subtitle">
            {activeAgent
              ? `${activeAgent.role} — ${activeAgent.description}`
              : 'Talk to your AI agents in real time'}
          </p>
        </div>
        {activeAgent && (
          <span className={`agent-card__status agent-card__status--${activeAgent.status}`}>
            {activeAgent.status}
          </span>
        )}
      </header>

      <div className="chat-panel__messages" role="log" aria-live="polite">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-bubble chat-bubble--${msg.role}`}>
            <p>{msg.content}</p>
            <time>
              {msg.timestamp.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </time>
          </div>
        ))}
      </div>

      <form className="chat-panel__input" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            activeAgent
              ? `Message ${activeAgent.name}...`
              : 'Type a message...'
          }
          aria-label="Chat message"
        />
        <button type="submit" className="btn btn--primary" disabled={!input.trim()}>
          Send
        </button>
      </form>
    </div>
  )
}
