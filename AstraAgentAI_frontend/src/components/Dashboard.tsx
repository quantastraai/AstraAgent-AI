import { agents } from '../data/agents'
import { AgentCard } from './AgentCard'
import './Dashboard.css'

interface DashboardProps {
  onAgentSelect: (agentId: string) => void
}

const stats = [
  { label: 'Active Agents', value: '4', change: '+2 this week' },
  { label: 'Tasks Completed', value: '899', change: '+124 today' },
  { label: 'Avg Response', value: '1.2s', change: '−0.3s faster' },
  { label: 'Uptime', value: '99.9%', change: 'Last 30 days' },
]

export function Dashboard({ onAgentSelect }: DashboardProps) {
  const featured = agents.slice(0, 3)

  return (
    <div className="dashboard">
      <header className="page-header">
        <div>
          <h1 className="page-header__title">Welcome back</h1>
          <p className="page-header__subtitle">
            Your AI agents are ready. Deploy, monitor, and orchestrate from one place.
          </p>
        </div>
        <button type="button" className="btn btn--primary">
          + New Agent
        </button>
      </header>

      <section className="stats-grid" aria-label="Platform statistics">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <p className="stat-card__label">{stat.label}</p>
            <p className="stat-card__value">{stat.value}</p>
            <p className="stat-card__change">{stat.change}</p>
          </div>
        ))}
      </section>

      <section className="dashboard__section">
        <div className="section-header">
          <h2>Featured Agents</h2>
          <a href="#agents" className="section-header__link">
            View all →
          </a>
        </div>
        <div className="agent-grid">
          {featured.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onSelect={() => onAgentSelect(agent.id)}
            />
          ))}
        </div>
      </section>

      <section className="dashboard__section">
        <h2>Recent Activity</h2>
        <ul className="activity-list">
          <li>
            <span className="activity-list__dot activity-list__dot--success" />
            Orion Code completed code review for <code>auth-module</code>
            <time>2 min ago</time>
          </li>
          <li>
            <span className="activity-list__dot activity-list__dot--info" />
            Nova Research generated market analysis report
            <time>18 min ago</time>
          </li>
          <li>
            <span className="activity-list__dot activity-list__dot--warning" />
            Lyra Writer is drafting blog post — 60% complete
            <time>1 hr ago</time>
          </li>
        </ul>
      </section>
    </div>
  )
}
