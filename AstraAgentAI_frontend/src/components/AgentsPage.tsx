import { agents } from '../data/agents'
import { AgentCard } from './AgentCard'
import './AgentsPage.css'

interface AgentsPageProps {
  onAgentSelect: (agentId: string) => void
}

export function AgentsPage({ onAgentSelect }: AgentsPageProps) {
  const online = agents.filter((a) => a.status === 'online').length

  return (
    <div className="agents-page">
      <header className="page-header">
        <div>
          <h1 className="page-header__title">AI Agents</h1>
          <p className="page-header__subtitle">
            {agents.length} agents configured · {online} online
          </p>
        </div>
        <button type="button" className="btn btn--primary">
          + Create Agent
        </button>
      </header>

      <div className="agent-grid">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onSelect={() => onAgentSelect(agent.id)}
          />
        ))}
      </div>
    </div>
  )
}
