export type AgentStatus = 'online' | 'busy' | 'offline'

export interface Agent {
  id: string
  name: string
  role: string
  description: string
  status: AgentStatus
  tasksCompleted: number
  icon: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export type View = 'dashboard' | 'agents' | 'chat' | 'settings'
