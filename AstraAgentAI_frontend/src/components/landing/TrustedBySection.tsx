import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const AI_MODELS = [
  {
    name: 'OpenAI',
    logo: '/openai-icon.svg',
    traits: ['⚡ Optimized for Reasoning', '👁️ Vision & Multimodal', '🧠 Intelligent Routing'],
  },
  {
    name: 'Claude',
    logo: '/claude.svg',
    traits: ['⚡ Optimized for Coding', '📚 Long Context', '🔍 Advanced Analysis'],
  },
  {
    name: 'Gemini',
    logo: '/file-type-gemini.svg',
    traits: ['⚡ Vision First', '🌐 Google Search', '🎭 Native Multimodal'],
  },
  {
    name: 'DeepSeek',
    logo: '/deepseek-icon.svg',
    traits: ['⚡ Coding Expert', '🧮 Complex Reasoning', '📐 Advanced Math'],
  },
  {
    name: 'Llama',
    logo: '/llama.svg',
    traits: ['⚡ Open Source', '🏢 On-Premise', '🛠️ Fine-Tuning'],
  },
  {
    name: 'GROQ',
    logo: '/groq-ai.svg',
    traits: ['⚡ Ultra Fast', '🚀 Low Latency', '📈 High Throughput'],
  },
]

const ROTATE_MS = 5000
const PULSE_DUR = '2s'
const GLOW_POSITIONS = [10, 24, 42, 58, 76, 90]
const TRAIT_TRANSITION = { duration: 0.15, ease: 'easeInOut' as const }

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${6 + ((i * 13) % 88)}%`,
  top: `${10 + ((i * 19) % 80)}%`,
  size: 1 + (i % 2),
  delay: (i % 5) * 0.8,
  duration: 4 + (i % 4),
}))

function buildConnectionPath(
  startX: number,
  startY: number,
  hubX: number,
  hubY: number,
  hubRadius: number,
) {
  const endY = hubY - hubRadius - 1
  const midY = startY + (endY - startY) * 0.55
  return `M ${startX} ${startY} L ${startX} ${midY} L ${hubX} ${midY} L ${hubX} ${endY}`
}

export function TrustedBySection() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const [connectionPaths, setConnectionPaths] = useState<string[]>([])
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 })

  const networkRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])

  const displayIndex = hovered ?? active
  const activeTraits = AI_MODELS[displayIndex].traits

  const measureLines = useCallback(() => {
    const network = networkRef.current
    const hub = hubRef.current
    if (!network || !hub) return

    const net = network.getBoundingClientRect()
    if (net.width === 0 || net.height === 0) return

    setSvgSize({ w: net.width, h: net.height })

    const hubRect = hub.getBoundingClientRect()
    const hubX = hubRect.left + hubRect.width / 2 - net.left
    const hubY = hubRect.top + hubRect.height / 2 - net.top
    const hubRadius = hubRect.width / 2

    const paths = dotRefs.current.map((dotEl) => {
      if (!dotEl) return ''
      const dot = dotEl.getBoundingClientRect()
      const x = dot.left + dot.width / 2 - net.left
      const y = dot.top + dot.height / 2 - net.top
      return buildConnectionPath(x, y, hubX, hubY, hubRadius)
    })

    setConnectionPaths(paths)
  }, [])

  useLayoutEffect(() => {
    measureLines()

    const network = networkRef.current
    if (!network) return

    const observer = new ResizeObserver(measureLines)
    observer.observe(network)

    window.addEventListener('resize', measureLines)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measureLines)
    }
  }, [measureLines])

  useEffect(() => {
    let frame = 0
    const start = performance.now()

    const tick = () => {
      measureLines()
      if (performance.now() - start < 700) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [displayIndex, measureLines])

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % AI_MODELS.length)
    }, ROTATE_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="ai-models-section relative overflow-hidden py-14">
      <div className="ai-models-particles pointer-events-none absolute inset-0" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="ai-models-particle absolute rounded-full bg-white"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1320px] px-10 text-center">
        <div className="ai-models-badge mx-auto inline-block">AI MODELS SUPPORTED</div>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/45">
          Access every leading AI model through one intelligent platform.
        </p>

        <div className="relative mx-auto mt-12 w-full max-w-[1100px]">
          <motion.div
            className="ai-models-bg-glow pointer-events-none absolute"
            aria-hidden="true"
            animate={{ left: `${GLOW_POSITIONS[displayIndex]}%` }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          />

          <div
            ref={networkRef}
            className={`ai-models-network ${hovered !== null ? 'is-hovering' : ''}`}
          >
            {svgSize.w > 0 && (
              <svg
                className="ai-models-lines pointer-events-none absolute inset-0 h-full w-full"
                viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
                aria-hidden="true"
              >
                {connectionPaths.map((path, i) =>
                  path ? (
                    <g key={AI_MODELS[i].name}>
                      <path
                        d={path}
                        className={`ai-connection-line ${hovered === i ? 'is-hot' : ''}`}
                        vectorEffect="non-scaling-stroke"
                        fill="none"
                      />
                      {hovered === i && (
                        <>
                          <circle r="3" className="ai-connection-pulse" fill="#34d399">
                            <animateMotion
                              dur={PULSE_DUR}
                              repeatCount="indefinite"
                              path={path}
                              calcMode="linear"
                            />
                            <animate
                              attributeName="opacity"
                              values="0;0.85;0.85;0"
                              keyTimes="0;0.08;0.78;1"
                              dur={PULSE_DUR}
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle r="5" className="ai-connection-pulse-trail" fill="#34d399">
                            <animateMotion
                              dur={PULSE_DUR}
                              repeatCount="indefinite"
                              path={path}
                              calcMode="linear"
                              begin="-0.15s"
                            />
                            <animate
                              attributeName="opacity"
                              values="0;0.25;0.25;0"
                              keyTimes="0;0.08;0.78;1"
                              dur={PULSE_DUR}
                              repeatCount="indefinite"
                            />
                          </circle>
                        </>
                      )}
                    </g>
                  ) : null,
                )}
              </svg>
            )}

            <ul className="ai-models-logos relative z-[1] flex flex-wrap items-start justify-center">
              {AI_MODELS.map(({ name, logo }, i) => {
                const isActive = displayIndex === i

                return (
                  <motion.li
                    key={name}
                    className={`ai-model-item ${isActive ? 'is-active' : ''}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="ai-model-icon-wrap flex items-center justify-center">
                      <img
                        src={logo}
                        alt={`${name} logo`}
                        className="ai-model-item-logo"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <span className="ai-model-item-name">{name}</span>
                    <div
                      ref={(el) => {
                        dotRefs.current[i] = el
                      }}
                      className="ai-model-dot-slot"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="ai-routing-dot"
                          className="ai-routing-dot"
                          aria-hidden="true"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        />
                      )}
                    </div>
                  </motion.li>
                )
              })}
            </ul>

            <div
              ref={hubRef}
              className={`ai-hub-node ${hovered !== null ? 'is-visible is-receiving' : ''}`}
              style={{ '--pulse-dur': PULSE_DUR } as CSSProperties}
              aria-hidden="true"
            >
              <div className="ai-hub-aura" />
              <div className="ai-hub-impact" />
              <div className="ai-hub-orbit-ring ai-hub-orbit-ring-1">
                <span className="ai-hub-orbit-dot ai-hub-orbit-dot-gold" />
              </div>
              <div className="ai-hub-orbit-ring ai-hub-orbit-ring-2">
                <span className="ai-hub-orbit-dot ai-hub-orbit-dot-emerald" />
              </div>
              <div className="ai-hub-orbit-ring ai-hub-orbit-ring-3" />
              <div className="ai-hub-shell">
                <div className="ai-hub-core">
                  <svg
                    className="ai-hub-neural-svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="16" cy="8" r="2" fill="currentColor" opacity="0.7" />
                    <circle cx="8" cy="24" r="2" fill="currentColor" opacity="0.55" />
                    <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.55" />
                    <circle cx="16" cy="16" r="3.5" fill="currentColor" />
                    <path
                      d="M16 10v3M11.5 22.5L14 18.5M20.5 22.5L18 18.5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      opacity="0.45"
                    />
                    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="0.75" opacity="0.2" />
                  </svg>
                  <span className="ai-hub-label">AI</span>
                </div>
              </div>
              <span className="ai-hub-caption">Intelligent Router</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={displayIndex}
            className="ai-models-trust-list mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={TRAIT_TRANSITION}
          >
            {activeTraits.map((item) => (
              <li key={item} className="ai-models-trust-item text-sm text-white/50">
                {item}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <motion.p
          className="ai-models-bottom-cta mx-auto mt-8 max-w-md"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.85 }}
        >
          <span className="ai-models-bottom-cta-plus" aria-hidden="true">+</span>
          Switch models instantly. No code changes required.
        </motion.p>
      </div>
    </section>
  )
}
