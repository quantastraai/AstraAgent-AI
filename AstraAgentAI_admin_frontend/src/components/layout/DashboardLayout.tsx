import type { ReactNode } from 'react'
import { Bell, Search } from 'lucide-react'
import { Sidebar } from './Sidebar'
import type { NavSection } from '../../types'

interface DashboardLayoutProps {
  active: NavSection
  onNavigate: (section: NavSection) => void
  expanded: Record<string, boolean>
  onToggleExpand: (key: string) => void
  title: string
  subtitle?: string
  children: ReactNode
}

export function DashboardLayout({
  active,
  onNavigate,
  expanded,
  onToggleExpand,
  title,
  subtitle,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-full min-h-screen bg-[#0A0A0A]">
      <Sidebar
        active={active}
        onNavigate={onNavigate}
        expanded={expanded}
        onToggleExpand={onToggleExpand}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-[#262626] px-6 py-4">
          <div>
            <h1 className="font-display text-xl font-semibold text-white">{title}</h1>
            {subtitle && <p className="mt-0.5 text-[13px] text-[#a1a1aa]">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a]" />
              <input
                type="search"
                placeholder="Search..."
                className="w-56 rounded-lg border border-[#262626] bg-[#111111] py-2 pl-9 pr-3 text-[13px] text-white placeholder:text-[#52525b] outline-none focus:border-[#7c3aed]/50"
              />
            </div>
            <button
              type="button"
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#262626] bg-[#111111] text-[#a1a1aa] transition-colors hover:text-white"
            >
              <Bell size={16} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
