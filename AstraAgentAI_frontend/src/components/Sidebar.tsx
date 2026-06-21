import type { View } from '../types'
import './Sidebar.css'

interface SidebarProps {
  activeView: View
  onViewChange: (view: View) => void
}

const navItems: { id: View; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '◈' },
  { id: 'agents', label: 'Agents', icon: '✦' },
  { id: 'chat', label: 'Chat', icon: '◎' },
  { id: 'settings', label: 'Settings', icon: '⚙' },
]

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo" aria-hidden="true">
          <span className="sidebar__star">★</span>
        </div>
        <div>
          <p className="sidebar__title">AstraAgent</p>
          <p className="sidebar__subtitle">AI Platform</p>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sidebar__link ${activeView === item.id ? 'sidebar__link--active' : ''}`}
            onClick={() => onViewChange(item.id)}
            aria-current={activeView === item.id ? 'page' : undefined}
          >
            <span className="sidebar__icon" aria-hidden="true">
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__status">
          <span className="sidebar__status-dot" />
          All systems operational
        </div>
      </div>
    </aside>
  )
}
