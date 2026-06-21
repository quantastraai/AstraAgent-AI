import type { Agent } from '../types'
import './AgentCard.css'

interface AgentCardProps {
  agent: Agent
  onSelect?: (agent: Agent) => void
}

const statusLabels: Record<Agent['status'], string> = {
  online: 'Online',
  busy: 'Busy',
  offline: 'Offline',
}

export function AgentCard({ agent, onSelect }: AgentCardProps) {
  return (
    <article className="agent-card">
      <div className="agent-card__header">
        <span className="agent-card__icon" aria-hidden="true">
          {agent.icon}
        </span>
        <span className={`agent-card__status agent-card__status--${agent.status}`}>
          {statusLabels[agent.status]}
        </span>
      </div>

      <h3 className="agent-card__name">{agent.name}</h3>
      <p className="agent-card__role">{agent.role}</p>
      <p className="agent-card__desc">{agent.description}</p>

      <div className="agent-card__footer">
        <span className="agent-card__stat">{agent.tasksCompleted} tasks done</span>
        <button
          type="button"
          className="agent-card__btn"
          onClick={() => onSelect?.(agent)}
          disabled={agent.status === 'offline'}
        >
          Deploy
        </button>
      </div>
    </article>
  )
}
