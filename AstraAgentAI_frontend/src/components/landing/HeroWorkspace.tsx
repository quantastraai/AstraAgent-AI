import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Bot,
  Check,
  CheckCheck,
  ChevronDown,
  FileText,
  MessageSquare,
  Paperclip,
  Plus,
  Rocket,
  Send,
  Settings,
  Sparkles,
} from 'lucide-react'
import { BrandLogo } from './BrandLogo'

const AI_RESPONSE =
  'I can build an AI agent that handles FAQs, routes tickets, and escalates complex issues to humans. Here\'s what I can set up for you:'

const INTEGRATIONS = [
  { icon: FileText, label: 'Knowledge Base', status: 'Connected', color: '#7C3AED' },
  { icon: MessageSquare, label: 'WhatsApp', status: 'Connected', color: '#22C55E' },
  { icon: Bot, label: 'CRM', status: 'Connected', color: '#94A3B8' },
  { icon: Rocket, label: 'Escalation', status: 'Enabled', color: '#D4AF37' },
]

const SIDEBAR_ITEMS = [
  { icon: MessageSquare, active: true },
  { icon: Bot, active: false },
  { icon: FileText, active: false },
  { icon: BarChart3, active: false },
  { icon: Settings, active: false },
]

export function HeroWorkspace() {
  const [phase, setPhase] = useState<'idle' | 'typing' | 'response' | 'cards'>('idle')
  const [typedText, setTypedText] = useState('')
  const [visibleCards, setVisibleCards] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('typing'), 600)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (phase !== 'typing') return

    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTypedText(AI_RESPONSE.slice(0, i))
      if (i >= AI_RESPONSE.length) {
        clearInterval(interval)
        setPhase('response')
        setTimeout(() => setPhase('cards'), 400)
      }
    }, 14)

    return () => clearInterval(interval)
  }, [phase])

  useEffect(() => {
    if (phase !== 'cards') return
    if (visibleCards >= INTEGRATIONS.length) return
    const t = setTimeout(() => setVisibleCards((n) => n + 1), 200)
    return () => clearTimeout(t)
  }, [phase, visibleCards])

  return (
    <motion.div
      className="hero-workspace flex h-[340px] w-full max-w-[640px] flex-col overflow-hidden rounded-2xl"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-white/[0.08] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <BrandLogo variant="icon" iconHeight={22} />
          <span className="text-[13px] font-semibold text-[#F8FAFC]">AstraAgent AI</span>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-white/70">
            GPT-4o
            <ChevronDown className="h-2.5 w-2.5 opacity-60" />
          </button>
          <span className="hidden items-center gap-1 text-[10px] text-green-400 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Knowledge Base
            <CheckCheck className="h-3 w-3" />
          </span>
          <div className="h-7 w-7 overflow-hidden rounded-full border border-white/[0.12] bg-gradient-to-br from-[#7C3AED]/40 to-[#D4AF37]/30">
            <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-white/80">
              U
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Sidebar */}
        <aside className="flex w-11 shrink-0 flex-col items-center gap-1.5 border-r border-white/[0.06] py-3">
          {SIDEBAR_ITEMS.map(({ icon: Icon, active }, i) => (
            <button
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                active
                  ? 'bg-[#7C3AED] text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]'
                  : 'text-white/35 hover:bg-white/[0.05] hover:text-white/60'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
        </aside>

        {/* Chat */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-hidden px-3 py-2.5">
            {/* User message */}
            <div className="mb-2.5 flex justify-end">
              <div className="max-w-[78%]">
                <div className="rounded-2xl rounded-br-sm bg-[#7C3AED]/25 px-3 py-2 text-[11px] leading-relaxed text-white/90">
                  How can I automate customer support?
                </div>
                <div className="mt-0.5 flex items-center justify-end gap-1 text-[9px] text-white/30">
                  10:30 AM
                  <Check className="h-2.5 w-2.5" />
                </div>
              </div>
            </div>

            {/* AI message */}
            <div className="flex items-start gap-2">
              <div className="mt-0.5 shrink-0">
                <BrandLogo variant="icon" iconHeight={20} />
              </div>
              <div className="min-w-0 flex-1">
                {phase === 'idle' ? (
                  <div className="h-6" />
                ) : phase === 'typing' && typedText.length === 0 ? (
                  <div className="flex items-center gap-1 px-1 py-2">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="typing-dot h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-2xl rounded-bl-sm bg-white/[0.05] px-3 py-2 text-[11px] leading-relaxed text-white/75"
                  >
                    {typedText}
                    {phase === 'typing' && (
                      <span className="ml-0.5 inline-block h-3 w-0.5 animate-pulse bg-[#7C3AED]" />
                    )}
                  </motion.div>
                )}

                {(phase === 'response' || phase === 'cards') && typedText.length > 0 && (
                  <div className="mt-0.5 text-[9px] text-white/30">10:31 AM</div>
                )}

                {/* Integration cards */}
                {(phase === 'response' || phase === 'cards') && (
                  <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                    {INTEGRATIONS.slice(0, phase === 'cards' ? visibleCards : 0).map(
                      ({ icon: Icon, label, status, color }, i) => (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1.5"
                        >
                          <div className="mb-1 flex items-center gap-1">
                            <Icon className="h-3 w-3" style={{ color }} />
                            <span className="truncate text-[9px] font-medium text-white/70">{label}</span>
                          </div>
                          <div className="flex items-center gap-0.5 text-[8px] text-green-400">
                            <Check className="h-2 w-2" />
                            {status}
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-white/[0.08] px-3 py-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-black/25 px-2.5 py-1.5">
              <Plus className="h-3.5 w-3.5 shrink-0 text-white/30" />
              <Paperclip className="h-3.5 w-3.5 shrink-0 text-white/30" />
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-white/30" />
              <input
                type="text"
                readOnly
                placeholder="Ask AstraAgent AI..."
                className="min-w-0 flex-1 bg-transparent text-[11px] text-white/85 placeholder:text-white/30 outline-none"
              />
              <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white shadow-[0_0_16px_rgba(124,58,237,0.45)]">
                <Send className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
