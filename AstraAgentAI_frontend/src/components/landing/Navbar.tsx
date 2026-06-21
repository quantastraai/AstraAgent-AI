import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { BrandLogo } from './BrandLogo'

const NAV_LINKS = ['Platform', 'Solutions', 'Use Cases', 'Pricing', 'Resources']

export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return pos
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
      <nav
        className={`navbar-shell mx-auto grid w-full max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center px-8 ${
          scrolled ? 'navbar-glass-scrolled' : ''
        }`}
      >
        <div className="justify-self-start self-center">
          <a href="#" className="inline-flex items-center leading-none">
            <BrandLogo
              iconHeight={scrolled ? 34 : 42}
              wordmarkHeight={scrolled ? 23 : 28}
            />
          </a>
        </div>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 justify-self-end">
          <a href="#signin" className="nav-sign-in hidden sm:block">
            Sign In
          </a>
          <a
            href="#get-started"
            className={`btn-nav-cta ${scrolled ? 'btn-nav-cta-scrolled' : ''}`}
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  )
}
