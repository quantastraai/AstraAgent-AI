import {
  BarChart3,
  ChevronDown,
  Home,
  Link2,
  MessageSquare,
  Settings,
  Ticket,
  Users,
} from 'lucide-react'
import type { NavSection } from '../../types'

interface NavItem {
  id: NavSection
  label: string
  icon: React.ReactNode
  children?: { id: NavSection; label: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: <Home size={18} /> },
  {
    id: 'conversations',
    label: 'Conversations',
    icon: <MessageSquare size={18} />,
    children: [
      { id: 'conversations-all', label: 'All Conversations' },
      { id: 'conversations-live', label: 'Live Chat' },
      { id: 'conversations-ai', label: 'AI Responses' },
    ],
  },
  {
    id: 'tickets',
    label: 'Tickets',
    icon: <Ticket size={18} />,
    children: [
      { id: 'tickets-open', label: 'Open Tickets' },
      { id: 'tickets-resolved', label: 'Resolved Tickets' },
    ],
  },
  {
    id: 'leads',
    label: 'Leads',
    icon: <Users size={18} />,
    children: [
      { id: 'leads-all', label: 'All Leads' },
      { id: 'leads-demo', label: 'Demo Requests' },
    ],
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: <Link2 size={18} />,
    children: [
      { id: 'integrations-whatsapp', label: 'WhatsApp' },
      { id: 'integrations-email', label: 'Email' },
      { id: 'integrations-crm', label: 'CRM' },
    ],
  },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={18} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
]

function isGroupActive(item: NavItem, active: NavSection): boolean {
  if (item.id === active) return true
  return item.children?.some((c) => c.id === active) ?? false
}

interface SidebarProps {
  active: NavSection
  onNavigate: (section: NavSection) => void
  expanded: Record<string, boolean>
  onToggleExpand: (key: string) => void
}

export function Sidebar({ active, onNavigate, expanded, onToggleExpand }: SidebarProps) {
  return (
    <aside className="flex h-full w-[260px] shrink-0 flex-col border-r border-[#262626] bg-[#0A0A0A]">
      <div className="flex items-center gap-2.5 border-b border-[#262626] px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#d4af37]">
          <span className="font-display text-sm font-bold text-white">A</span>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-white">AstraAgent</p>
          <p className="text-[11px] text-[#a1a1aa]">Admin Dashboard</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const groupActive = isGroupActive(item, active)
            const hasChildren = !!item.children
            const isExpanded = expanded[item.id] ?? groupActive

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    if (hasChildren) {
                      onToggleExpand(item.id)
                      onNavigate(item.children![0].id)
                    } else {
                      onNavigate(item.id)
                    }
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] transition-colors ${
                    groupActive && !hasChildren
                      ? 'bg-[#7c3aed]/15 text-white'
                      : groupActive
                        ? 'text-white'
                        : 'text-[#a1a1aa] hover:bg-[#111111] hover:text-white'
                  }`}
                >
                  <span className={groupActive ? 'text-[#7c3aed]' : ''}>{item.icon}</span>
                  <span className="flex-1 font-medium">{item.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {hasChildren && isExpanded && (
                  <ul className="ml-7 mt-0.5 space-y-0.5 border-l border-[#262626] pl-3">
                    {item.children!.map((child) => (
                      <li key={child.id}>
                        <button
                          type="button"
                          onClick={() => onNavigate(child.id)}
                          className={`block w-full rounded-md px-2 py-1.5 text-left text-[12px] transition-colors ${
                            active === child.id
                              ? 'font-medium text-[#d4af37]'
                              : 'text-[#71717a] hover:text-white'
                          }`}
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="border-t border-[#262626] p-4">
        <div className="flex items-center gap-3 rounded-lg bg-[#111111] p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c3aed]/20 text-xs font-semibold text-[#7c3aed]">
            AD
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium text-white">Admin User</p>
            <p className="truncate text-[11px] text-[#71717a]">admin@astraagent.ai</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export function resolvePage(section: NavSection): string {
  if (section === 'overview') return 'overview'
  if (section.startsWith('conversations')) return 'conversations'
  if (section.startsWith('tickets')) return 'tickets'
  if (section.startsWith('leads')) return 'leads'
  if (section.startsWith('integrations')) return 'integrations'
  if (section === 'analytics') return 'analytics'
  if (section === 'settings') return 'settings'
  return 'overview'
}
