import { ArrowRight, Check, Play } from 'lucide-react'
import { BrandLogo } from './BrandLogo'

const PRODUCT_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'AI Agents', href: '#features' },
  { label: 'Automation', href: '#automation' },
  { label: 'Knowledge Base', href: '#knowledge-base' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Analytics', href: '#dashboard' },
  { label: 'Pricing', href: '#pricing' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Customers', href: '#customers' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
  { label: 'Partners', href: '#partners' },
]

const RESOURCE_LINKS = [
  { label: 'Documentation', href: '#docs' },
  { label: 'API', href: '#api' },
  { label: 'Blog', href: '#blog' },
  { label: 'Changelog', href: '#changelog' },
  { label: 'Status', href: '#status' },
  { label: 'Support', href: '#support' },
]

const TRUST_BADGES = ['Enterprise Ready', 'Secure by Design', 'AI Powered']

const CTA_TRUST = ['No Credit Card', '2 Min Setup', 'Enterprise Security']

const SOCIAL = [
  {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.065 2.065 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

const LOGO_STARS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 19) % 78)}%`,
  top: `${6 + ((i * 27) % 82)}%`,
  size: 1 + (i % 2),
  opacity: 0.2 + (i % 3) * 0.15,
}))

const BOTTOM_LINKS = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
  { label: 'Security', href: '#security' },
  { label: 'Status', href: '#status' },
]

const CTA_WORDS = ['Build.', 'Deploy.', 'Scale.']

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="footer-column-title mb-5">{title}</h3>
      <ul className="space-y-3.5">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="footer-link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BottomSeparator() {
  return <span className="footer-bottom-sep" aria-hidden="true">•</span>
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-root relative overflow-hidden border-t border-white/[0.06] bg-[#09090B]">
      {/* CTA */}
      <div className="relative mx-auto max-w-[1320px] px-10 py-12">
        <div className="footer-cta relative overflow-hidden rounded-2xl border border-white/[0.06] px-6 py-6 sm:px-8 sm:py-7">
          <div className="footer-cta-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="footer-cta-btn-glow pointer-events-none absolute right-6 top-1/2 hidden h-28 w-36 -translate-y-1/2 rounded-full blur-[56px] lg:block" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-sm">
              <h2 className="font-display text-[clamp(1.625rem,3.5vw,2.125rem)] font-bold leading-[1.2] tracking-tight">
                {CTA_WORDS.map((word, i) => (
                  <span
                    key={word}
                    className="footer-cta-word block text-[#F8FAFC]"
                    style={{ animationDelay: `${i * 2}s` }}
                  >
                    {word}
                  </span>
                ))}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Deploy AI agents across your website, WhatsApp, CRM, and support channels.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col items-start gap-4 lg:w-auto lg:items-end">
              <div className="footer-cta-actions flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href="#get-started" className="footer-cta-btn footer-cta-btn-gold flex items-center justify-center gap-2 rounded-xl px-8 text-sm font-semibold">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button type="button" className="footer-cta-btn footer-cta-btn-glass flex items-center justify-center gap-2 rounded-xl px-8 text-sm font-medium">
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Book Demo
                </button>
              </div>
              <div className="footer-cta-trust w-full border-t border-white/[0.06] pt-4 lg:w-auto">
                <ul className="space-y-1.5">
                  {CTA_TRUST.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white/45">
                      <Check className="h-3 w-3 shrink-0 text-[#D4B06A]" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="relative mx-auto max-w-[1320px] px-10 pb-14">
        <div className="footer-links-grid relative gap-12">
          <div className="relative">
            <div className="footer-brand-glow pointer-events-none absolute -left-6 -top-6 h-[260px] w-[280px] rounded-full blur-[80px]" aria-hidden="true" />
            <div className="footer-logo-stars pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              {LOGO_STARS.map((s) => (
                <span
                  key={s.id}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: s.left,
                    top: s.top,
                    width: s.size,
                    height: s.size,
                    opacity: s.opacity,
                  }}
                />
              ))}
            </div>

            <div className="relative">
              <a href="#" className="inline-flex items-center">
                <BrandLogo iconHeight={44} wordmarkHeight={28} />
              </a>
              <span className="footer-version-badge mt-3 inline-block">AI Platform v1</span>
              <p className="mt-4 max-w-[260px] text-sm leading-[1.7] text-white/60">
                AI Operating System for
                <br />
                Customer Support,
                <br />
                Sales &amp; Business Automation.
              </p>
              <ul className="mt-5 space-y-2">
                {TRUST_BADGES.map((badge) => (
                  <li key={badge} className="flex items-center gap-2 text-xs text-white/50">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#D4B06A]" strokeWidth={2.5} />
                    {badge}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3">
                {SOCIAL.map(({ label, icon }) => (
                  <a key={label} href="#" aria-label={label} className="footer-social-icon">
                    {icon}
                    <span className="footer-social-tooltip">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <FooterColumn title="Product" links={PRODUCT_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar relative">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-10 py-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="footer-bottom-row flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="footer-bottom-item">© {year} AstraAgent AI</span>
            <BottomSeparator />
            <span className="footer-bottom-item">Made by QuantAstraAI</span>
            {BOTTOM_LINKS.map(({ label, href }) => (
              <span key={label} className="contents">
                <BottomSeparator />
                <a href={href} className="footer-bottom-item footer-bottom-link">
                  {label}
                </a>
              </span>
            ))}
          </div>
          <p className="footer-bottom-item text-sm">Designed &amp; Engineered by QuantAstraAI</p>
        </div>
      </div>

      {/* Live AI Status Bar */}
      <div className="footer-status-bar relative border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-x-5 gap-y-2 px-10 py-4 sm:gap-x-6">
          <span className="flex items-center gap-2 text-xs font-medium tracking-wide text-white/50">
            <span aria-hidden="true">🟢</span>
            All Systems Operational
          </span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />
          <span className="text-xs text-white/50">
            <span aria-hidden="true">🤖</span>{' '}
            <span className="font-semibold text-white/70">24/7</span> Active Agents
          </span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />
          <span className="text-xs text-white/50">
            <span aria-hidden="true">⚡</span>{' '}
            <span className="font-semibold tabular-nums text-emerald-400">148ms</span> API
          </span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />
          <span className="text-xs text-white/50">
            <span aria-hidden="true">📈</span>{' '}
            <span className="font-semibold tabular-nums text-emerald-400">99.98%</span> Uptime
          </span>
        </div>
      </div>
    </footer>
  )
}
