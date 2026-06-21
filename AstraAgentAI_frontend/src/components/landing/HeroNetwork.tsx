import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Globe,
  Mail,
  MessageSquare,
  Users,
} from 'lucide-react'
import { BrandLogo } from './BrandLogo'

type NetworkNode = {
  id: string
  label: string
  icon: LucideIcon
  x: number
  y: number
  primary?: boolean
}

const NODES: NetworkNode[] = [
  { id: 'crm', label: 'CRM', icon: Users, x: 80, y: 160 },
  { id: 'ai', label: 'AI', icon: Bot, x: 320, y: 160, primary: true },
  { id: 'email', label: 'Email', icon: Mail, x: 560, y: 160 },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare, x: 200, y: 52 },
  { id: 'website', label: 'Website', icon: Globe, x: 200, y: 268 },
]

const EDGES = [
  { from: 'crm', to: 'ai' },
  { from: 'ai', to: 'email' },
  { from: 'whatsapp', to: 'ai' },
  { from: 'website', to: 'ai' },
]

function getNode(id: string) {
  return NODES.find((n) => n.id === id)!
}

export function HeroNetwork() {
  return (
    <motion.div
      className="relative mx-auto h-[320px] w-full max-w-[640px]"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[60px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 320"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {EDGES.map(({ from, to }, i) => {
          const a = getNode(from)
          const b = getNode(to)
          return (
            <g key={`${from}-${to}`}>
              <motion.line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#netGrad)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: 'easeOut' }}
              />
              <motion.circle
                r="3"
                fill="#7C3AED"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  offsetDistance: ['0%', '100%'],
                }}
                transition={{
                  duration: 2.4,
                  delay: 1 + i * 0.3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  offsetPath: `path('M ${a.x} ${a.y} L ${b.x} ${b.y}')`,
                }}
              />
            </g>
          )
        })}
      </svg>

      {NODES.map(({ id, label, icon: Icon, x, y, primary }, i) => (
        <motion.div
          key={id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(x / 640) * 100}%`, top: `${(y / 320) * 100}%` }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55 + i * 0.1, ease: 'easeOut' }}
        >
          <motion.div
            animate={primary ? { boxShadow: ['0 0 20px rgba(124,58,237,0.25)', '0 0 40px rgba(124,58,237,0.45)', '0 0 20px rgba(124,58,237,0.25)'] } : undefined}
            transition={primary ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined}
            className={`flex flex-col items-center gap-2 rounded-2xl border px-4 py-3 ${
              primary
                ? 'min-w-[100px] border-[#7C3AED]/40 bg-[#7C3AED]/15'
                : 'min-w-[88px] border-white/[0.08] bg-white/[0.04] backdrop-blur-sm'
            }`}
          >
            {primary ? (
              <BrandLogo variant="icon" iconHeight={28} />
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06]">
                <Icon className={`h-4 w-4 ${id === 'whatsapp' ? 'text-green-400' : 'text-[#7C3AED]'}`} />
              </div>
            )}
            <span className={`text-xs font-medium ${primary ? 'text-[#F8FAFC]' : 'text-white/60'}`}>
              {label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
