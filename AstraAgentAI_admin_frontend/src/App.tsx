import { useState } from 'react'
import { DashboardLayout } from './components/layout/DashboardLayout'
import { resolvePage } from './components/layout/Sidebar'
import { OverviewPage } from './components/pages/OverviewPage'
import { ConversationsPage } from './components/pages/ConversationsPage'
import { TicketsPage } from './components/pages/TicketsPage'
import { LeadsPage } from './components/pages/LeadsPage'
import { IntegrationsPage } from './components/pages/IntegrationsPage'
import { PlaceholderPage } from './components/pages/PlaceholderPage'
import type { NavSection } from './types'

const PAGE_META: Record<string, { title: string; subtitle?: string }> = {
  overview: { title: 'Overview', subtitle: 'Welcome back — here\'s what\'s happening today.' },
  conversations: { title: 'Conversations', subtitle: 'Manage customer chats across all channels.' },
  tickets: { title: 'Tickets', subtitle: 'Track and resolve support requests.' },
  leads: { title: 'Leads', subtitle: 'View and manage incoming leads.' },
  integrations: { title: 'Integrations', subtitle: 'Connect your tools and channels.' },
  analytics: { title: 'Analytics', subtitle: 'Performance insights and reports.' },
  settings: { title: 'Settings', subtitle: 'Workspace and account configuration.' },
}

function App() {
  const [active, setActive] = useState<NavSection>('overview')
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    conversations: true,
    tickets: false,
    leads: false,
    integrations: false,
  })

  const page = resolvePage(active)
  const meta = PAGE_META[page]

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const renderPage = () => {
    switch (page) {
      case 'overview':
        return <OverviewPage />
      case 'conversations':
        return <ConversationsPage filter={active} />
      case 'tickets':
        return <TicketsPage filter={active} />
      case 'leads':
        return <LeadsPage filter={active} />
      case 'integrations':
        return <IntegrationsPage filter={active} />
      case 'analytics':
        return <PlaceholderPage type="analytics" />
      case 'settings':
        return <PlaceholderPage type="settings" />
      default:
        return <OverviewPage />
    }
  }

  return (
    <DashboardLayout
      active={active}
      onNavigate={setActive}
      expanded={expanded}
      onToggleExpand={toggleExpand}
      title={meta.title}
      subtitle={meta.subtitle}
    >
      {renderPage()}
    </DashboardLayout>
  )
}

export default App
