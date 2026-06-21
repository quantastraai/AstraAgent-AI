import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { BookOpen, Bot, Check, TrendingUp, User, Zap } from 'lucide-react'

type Tilt = 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'

const TILT: Record<Tilt, string> = {
  'left-top': 'perspective-card-left-top',
  'left-bottom': 'perspective-card-left-bottom',
  'right-top': 'perspective-card-right-top',
  'right-bottom': 'perspective-card-right-bottom',
}

const POSITION: Record<Tilt, string> = {
  'left-top': 'left-0 top-0 md:-left-2 lg:-left-6',
  'left-bottom': 'bottom-0 left-0 md:-left-4 lg:-left-10',
  'right-top': 'right-0 top-0 md:-right-2 lg:-right-6',
  'right-bottom': 'bottom-0 right-0 md:-right-4 lg:-right-10',
}

function SideCard({
  tilt,
  glow,
  delay,
  children,
}: {
  tilt: Tilt
  glow: 'purple' | 'gold'
  delay: number
  children: ReactNode
}) {
  return (
    <motion.div
      className={`hero-side-card absolute z-20 hidden w-[168px] md:block lg:w-[188px] ${POSITION[tilt]} ${TILT[tilt]} ${
        glow === 'purple' ? 'hero-side-card-purple' : 'hero-side-card-gold'
      }`}
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function MiniGraph({ color = '#7C3AED' }: { color?: string }) {
  const points = '0,18 12,12 24,14 36,6 48,8 60,2'
  return (
    <svg viewBox="0 0 60 20" className="mt-2 h-5 w-full" aria-hidden="true">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  )
}

export function HeroSideCards() {
  return (
    <>
      <SideCard tilt="left-top" glow="purple" delay={0.5}>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Bot className="h-3.5 w-3.5 text-[#7C3AED]" />
            <span className="text-[10px] font-medium text-white/50">AI Agents</span>
          </div>
          <span className="rounded-full bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-green-400">
            +24%
          </span>
        </div>
        <p className="font-display text-xl font-bold text-[#F8FAFC]">18</p>
        <p className="text-[10px] text-white/45">Active Agents</p>
        <MiniGraph />
      </SideCard>

      <SideCard tilt="left-bottom" glow="purple" delay={0.65}>
        <div className="mb-2 flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5 text-[#7C3AED]" />
          <span className="text-[10px] font-medium text-white/50">Knowledge Base</span>
        </div>
        <p className="font-display text-xl font-bold text-[#F8FAFC]">128</p>
        <p className="text-[10px] text-white/45">Documents</p>
        <div className="mt-2 flex gap-1">
          {['PDF', 'DOC', 'TXT'].map((type) => (
            <span
              key={type}
              className="rounded bg-white/[0.05] px-1.5 py-0.5 text-[8px] font-medium text-white/40"
            >
              {type}
            </span>
          ))}
        </div>
      </SideCard>

      <SideCard tilt="right-top" glow="gold" delay={0.8}>
        <div className="mb-2 flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5 text-[#D4AF37]" />
          <span className="text-[10px] font-medium text-white/50">Workflow</span>
        </div>
        <div className="my-2 flex items-center justify-center gap-1">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06]">
            <User className="h-3 w-3 text-white/50" />
          </div>
          <span className="text-[8px] text-white/25">→</span>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7C3AED]/25">
            <Bot className="h-3 w-3 text-[#7C3AED]" />
          </div>
          <span className="text-[8px] text-white/25">→</span>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15">
            <Check className="h-3 w-3 text-green-400" />
          </div>
        </div>
        <p className="text-[10px] text-white/45">12 Active Workflows</p>
      </SideCard>

      <SideCard tilt="right-bottom" glow="gold" delay={0.95}>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-medium text-white/50">Analytics</span>
          </div>
          <span className="rounded-full bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-green-400">
            +18.6%
          </span>
        </div>
        <p className="font-display text-xl font-bold text-[#F8FAFC]">24K</p>
        <p className="text-[10px] text-white/45">Conversations</p>
        <MiniGraph color="#D4AF37" />
      </SideCard>
    </>
  )
}

export function HeroWorkspaceGlow() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
      viewBox="0 0 980 340"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="glowPurple" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="glowGold" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M 120 50 Q 280 80 420 120" fill="none" stroke="url(#glowPurple)" strokeWidth="1.2" opacity="0.5" />
      <path d="M 100 290 Q 300 250 420 220" fill="none" stroke="url(#glowPurple)" strokeWidth="1.2" opacity="0.5" />
      <path d="M 860 50 Q 700 80 560 120" fill="none" stroke="url(#glowGold)" strokeWidth="1.2" opacity="0.5" />
      <path d="M 880 290 Q 680 250 560 220" fill="none" stroke="url(#glowGold)" strokeWidth="1.2" opacity="0.5" />
    </svg>
  )
}
