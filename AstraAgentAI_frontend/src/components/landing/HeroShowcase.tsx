import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { HeroNetwork } from './HeroNetwork'

export function HeroShowcase() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-[100px] lg:px-8">
      <motion.div
        className="flex w-full flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex h-8 items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1 text-[11px] font-medium tracking-wide text-white/65">
            <Sparkles className="h-3 w-3 text-[#D4AF37]" />
            AI Operating System
          </span>
        </div>

        <h1 className="font-display flex h-[120px] items-center justify-center text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-[#F8FAFC]">
          <span>
            Your Next Employee
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8962E] bg-clip-text text-transparent">
              Is AI.
            </span>
          </span>
        </h1>

        <p className="flex h-12 max-w-xl items-center justify-center text-base leading-snug text-white/55">
          Deploy AI agents that automate support, sales and workflows.
        </p>

        <div className="mt-6 w-full">
          <HeroNetwork />
        </div>

        <div className="mt-8 flex h-14 items-center justify-center gap-4">
          <a
            href="#get-started"
            className="btn-gold flex items-center gap-2 rounded-xl px-8 text-sm transition-all"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
          <button className="btn-glass flex items-center gap-2 rounded-xl px-8 text-sm transition-all">
            <Play className="h-3.5 w-3.5 fill-current" />
            Live Demo
          </button>
        </div>
      </motion.div>
    </section>
  )
}
