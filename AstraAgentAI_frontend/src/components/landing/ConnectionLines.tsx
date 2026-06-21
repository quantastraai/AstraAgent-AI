import { motion } from 'framer-motion'

const LINES = [
  { id: 'agent', x1: '50%', y1: '8%', x2: '50%', y2: '32%' },
  { id: 'knowledge', x1: '12%', y1: '50%', x2: '32%', y2: '50%' },
  { id: 'workflow', x1: '88%', y1: '50%', x2: '68%', y2: '50%' },
  { id: 'analytics', x1: '50%', y1: '92%', x2: '50%', y2: '68%' },
]

export function ConnectionLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.15" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.35" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {LINES.map((line, i) => (
        <motion.line
          key={line.id}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#lineGrad)"
          strokeWidth="0.12"
          filter="url(#glow)"
          className="connection-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 + i * 0.12, ease: 'easeOut' }}
        />
      ))}
    </svg>
  )
}
