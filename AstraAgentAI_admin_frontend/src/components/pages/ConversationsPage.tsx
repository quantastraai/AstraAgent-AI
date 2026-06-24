import { useState } from 'react'
import { Globe, Mail, MessageCircle } from 'lucide-react'
import { CONVERSATIONS } from '../../data/mockData'
import type { Conversation, NavSection } from '../../types'

function ChannelIcon({ channel }: { channel: string }) {
  if (channel === 'WhatsApp') return <MessageCircle size={14} className="text-emerald-400" />
  if (channel === 'Email') return <Mail size={14} className="text-blue-400" />
  return <Globe size={14} className="text-[#7c3aed]" />
}

function filterConversations(filter: NavSection): Conversation[] {
  switch (filter) {
    case 'conversations-live':
      return CONVERSATIONS.filter((c) => c.status === 'Open' || c.status === 'Human Handoff')
    case 'conversations-ai':
      return CONVERSATIONS.filter((c) => c.status === 'AI Handling' || c.status === 'Resolved')
    default:
      return CONVERSATIONS
  }
}

interface ConversationsPageProps {
  filter: NavSection
}

export function ConversationsPage({ filter }: ConversationsPageProps) {
  const list = filterConversations(filter)
  const [selectedId, setSelectedId] = useState(list[0]?.id ?? '')

  const selected = list.find((c) => c.id === selectedId) ?? list[0]

  return (
    <div className="flex h-[calc(100vh-140px)] overflow-hidden rounded-xl border border-[#262626] bg-[#111111]">
      {/* Conversation List */}
      <div className="flex w-[320px] shrink-0 flex-col border-r border-[#262626]">
        <div className="border-b border-[#262626] px-4 py-3">
          <p className="text-[13px] font-medium text-white">
            {filter === 'conversations-live'
              ? 'Live Chat'
              : filter === 'conversations-ai'
                ? 'AI Responses'
                : 'All Conversations'}
          </p>
          <p className="text-[11px] text-[#71717a]">{list.length} conversations</p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {list.map((conv) => (
            <button
              key={conv.id}
              type="button"
              onClick={() => setSelectedId(conv.id)}
              className={`w-full border-b border-[#262626]/60 px-4 py-3.5 text-left transition-colors ${
                selected?.id === conv.id ? 'bg-[#7c3aed]/10' : 'hover:bg-[#1a1a1a]'
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-medium text-white">{conv.customer}</p>
                <span className="text-[11px] text-[#71717a]">{conv.time}</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#71717a]">
                <ChannelIcon channel={conv.channel} />
                {conv.channel}
              </div>
              <p className="mt-1.5 truncate text-[12px] text-[#a1a1aa]">{conv.preview}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex min-w-0 flex-1 flex-col">
        {selected ? (
          <>
            <div className="flex items-center justify-between border-b border-[#262626] px-5 py-3.5">
              <div>
                <p className="text-[14px] font-medium text-white">{selected.customer}</p>
                <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[#71717a]">
                  <ChannelIcon channel={selected.channel} />
                  {selected.channel}
                </div>
              </div>
              <span className="rounded-full bg-[#7c3aed]/15 px-2.5 py-1 text-[11px] font-medium text-[#a78bfa]">
                {selected.status}
              </span>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {selected.messages.map((msg, i) => (
                <div key={i} className={msg.role === 'customer' ? '' : 'pl-4'}>
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-[#71717a]">
                    {msg.role === 'customer' ? 'Customer' : 'AI'}
                  </p>
                  <div
                    className={`inline-block max-w-[80%] rounded-xl px-4 py-2.5 text-[13px] ${
                      msg.role === 'customer'
                        ? 'bg-[#1a1a1a] text-[#e4e4e7]'
                        : 'border border-[#7c3aed]/25 bg-[#7c3aed]/10 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {selected.aiConfidence !== undefined && (
                <div className="flex items-center gap-2 pt-2">
                  <div className="h-1.5 flex-1 max-w-[200px] overflow-hidden rounded-full bg-[#262626]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#d4af37]"
                      style={{ width: `${selected.aiConfidence}%` }}
                    />
                  </div>
                  <span className="text-[12px] text-[#d4af37]">
                    AI Confidence: {selected.aiConfidence}%
                  </span>
                </div>
              )}
            </div>

            <div className="border-t border-[#262626] p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a reply..."
                  className="flex-1 rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 py-2.5 text-[13px] text-white placeholder:text-[#52525b] outline-none focus:border-[#7c3aed]/50"
                />
                <button
                  type="button"
                  className="rounded-lg bg-[#7c3aed] px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#6d28d9]"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center text-[#71717a]">
            Select a conversation
          </div>
        )}
      </div>
    </div>
  )
}
