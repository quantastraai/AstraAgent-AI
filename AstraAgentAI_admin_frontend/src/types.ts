export type NavSection =
  | 'overview'
  | 'conversations'
  | 'conversations-all'
  | 'conversations-live'
  | 'conversations-ai'
  | 'tickets'
  | 'tickets-open'
  | 'tickets-resolved'
  | 'leads'
  | 'leads-all'
  | 'leads-demo'
  | 'integrations'
  | 'integrations-whatsapp'
  | 'integrations-email'
  | 'integrations-crm'
  | 'analytics'
  | 'settings'

export type ConversationStatus = 'Open' | 'Resolved' | 'AI Handling' | 'Human Handoff'
export type TicketPriority = 'Low' | 'Medium' | 'High' | 'Urgent'
export type TicketStatus = 'Open' | 'In Progress' | 'Resolved'
export type LeadSource = 'Contact Form' | 'Demo Booking' | 'Chat Widget'
export type Channel = 'Website' | 'WhatsApp' | 'Email' | 'Slack'
export type IntegrationStatus = 'Connected' | 'Disconnected'

export interface Conversation {
  id: string
  customer: string
  channel: Channel
  status: ConversationStatus
  time: string
  preview: string
  messages: { role: 'customer' | 'ai'; text: string }[]
  aiConfidence?: number
}

export interface Ticket {
  id: string
  customer: string
  priority: TicketPriority
  status: TicketStatus
  assignedTo: string
}

export interface Lead {
  name: string
  email: string
  company: string
  source: LeadSource
  date: string
}

export interface Integration {
  name: string
  description: string
  status: IntegrationStatus
  icon: 'whatsapp' | 'email' | 'crm' | 'slack'
}

export interface ActivityItem {
  text: string
  time: string
}

export interface WeekChartData {
  day: string
  value: number
}
