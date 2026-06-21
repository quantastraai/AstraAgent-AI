const HERO_PARTICLES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${20 + ((i * 19) % 60)}%`,
  top: `${18 + ((i * 17) % 55)}%`,
  size: 2 + (i % 2),
  delay: `${(i * 0.7) % 5}s`,
  duration: `${4 + (i % 4)}s`,
}))

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Subtle grid — full page, very light */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Hero zone — glow + particles concentrated here only */}
      <div className="absolute left-1/2 top-0 h-[min(100vh,880px)] w-full max-w-[960px] -translate-x-1/2">
        {/* Purple glow — hero center */}
        <div
          className="absolute left-1/2 top-[42%] h-[380px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[72px]"
          style={{
            background:
              'radial-gradient(circle, rgba(124,58,237,0.42) 0%, rgba(124,58,237,0.14) 42%, transparent 72%)',
          }}
        />

        {HERO_PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle absolute rounded-full bg-white/35"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0 opacity-[0.022]" />
    </div>
  )
}
