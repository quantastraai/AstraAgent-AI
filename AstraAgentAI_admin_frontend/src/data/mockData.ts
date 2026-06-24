import type {
  ActivityItem,
  Conversation,
  Integration,
  Lead,
  Ticket,
  WeekChartData,
} from '../types'

export const OVERVIEW_STATS = [
  { label: 'Total Conversations', value: '1,248', icon: 'messages' as const, accent: 'purple' as const },
  { label: 'Open Tickets', value: '24', icon: 'ticket' as const, accent: 'gold' as const },
  { label: 'Leads Generated', value: '87', icon: 'users' as const, accent: 'purple' as const },
  { label: 'Automation Rate', value: '92%', icon: 'zap' as const, accent: 'gold' as const },
]

export const RECENT_ACTIVITY: ActivityItem[] = [
  { text: 'New lead received', time: '2m ago' },
  { text: 'Ticket created', time: '5m ago' },
  { text: 'CRM updated', time: '12m ago' },
  { text: 'Demo booked', time: '18m ago' },
]

export const WEEKLY_CONVERSATIONS: WeekChartData[] = [
  { day: 'Mon', value: 42 },
  { day: 'Tue', value: 58 },
  { day: 'Wed', value: 51 },
  { day: 'Thu', value: 72 },
  { day: 'Fri', value: 65 },
  { day: 'Sat', value: 38 },
  { day: 'Sun', value: 29 },
]

export const CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    customer: 'Rahul Patel',
    channel: 'Website',
    status: 'Resolved',
    time: '2m ago',
    preview: 'Where is my order?',
    messages: [
      { role: 'customer', text: 'Where is my order?' },
      { role: 'ai', text: 'Your order has been shipped.' },
    ],
    aiConfidence: 96,
  },
  {
    id: '2',
    customer: 'Priya Sharma',
    channel: 'WhatsApp',
    status: 'AI Handling',
    time: '8m ago',
    preview: 'Can I book a demo tomorrow?',
    messages: [
      { role: 'customer', text: 'Can I book a demo tomorrow?' },
      { role: 'ai', text: 'Absolutely! I have slots at 10 AM and 3 PM. Which works for you?' },
    ],
    aiConfidence: 94,
  },
  {
    id: '3',
    customer: 'Alex Morgan',
    channel: 'Email',
    status: 'Human Handoff',
    time: '15m ago',
    preview: 'Do you offer refunds?',
    messages: [
      { role: 'customer', text: 'Do you offer refunds?' },
      { role: 'ai', text: 'Let me connect you with our support team for refund details.' },
    ],
    aiConfidence: 78,
  },
  {
    id: '4',
    customer: 'Sneha Reddy',
    channel: 'Website',
    status: 'Open',
    time: '22m ago',
    preview: 'Pricing for enterprise plan?',
    messages: [
      { role: 'customer', text: 'Pricing for enterprise plan?' },
      { role: 'ai', text: 'Our Enterprise plan starts at $499/mo with unlimited agents.' },
    ],
    aiConfidence: 91,
  },
  {
    id: '5',
    customer: 'Vikram Singh',
    channel: 'WhatsApp',
    status: 'Resolved',
    time: '1h ago',
    preview: 'Thanks for the help!',
    messages: [
      { role: 'customer', text: 'Thanks for the help!' },
      { role: 'ai', text: 'Happy to help! Let us know if you need anything else.' },
    ],
    aiConfidence: 99,
  },
]

export const TICKETS: Ticket[] = [
  { id: '#1024', customer: 'Rahul Patel', priority: 'High', status: 'Open', assignedTo: 'Support Team' },
  { id: '#1023', customer: 'Priya Sharma', priority: 'Medium', status: 'In Progress', assignedTo: 'Amit K.' },
  { id: '#1022', customer: 'Alex Morgan', priority: 'High', status: 'Open', assignedTo: 'Support Team' },
  { id: '#1021', customer: 'Sneha Reddy', priority: 'Low', status: 'Resolved', assignedTo: 'Neha S.' },
  { id: '#1020', customer: 'Vikram Singh', priority: 'Medium', status: 'Resolved', assignedTo: 'Amit K.' },
  { id: '#1019', customer: 'Anita Desai', priority: 'Urgent', status: 'Open', assignedTo: 'Support Team' },
]

export const LEADS: Lead[] = [
  { name: 'Rahul Patel', email: 'rahul@techcorp.in', company: 'TechCorp', source: 'Contact Form', date: 'Jun 24, 2026' },
  { name: 'Priya Sharma', email: 'priya@startup.io', company: 'StartupIO', source: 'Demo Booking', date: 'Jun 23, 2026' },
  { name: 'Alex Morgan', email: 'alex@global.com', company: 'Global Inc', source: 'Chat Widget', date: 'Jun 23, 2026' },
  { name: 'Sneha Reddy', email: 'sneha@design.co', company: 'Design Co', source: 'Contact Form', date: 'Jun 22, 2026' },
  { name: 'Vikram Singh', email: 'vikram@retail.in', company: 'RetailMax', source: 'Demo Booking', date: 'Jun 22, 2026' },
  { name: 'Anita Desai', email: 'anita@finance.com', company: 'FinanceHub', source: 'Chat Widget', date: 'Jun 21, 2026' },
]

export const INTEGRATIONS: Integration[] = [
  { name: 'WhatsApp', description: 'Business messaging & automated replies', status: 'Connected', icon: 'whatsapp' },
  { name: 'Zoho CRM', description: 'Sync leads and contacts automatically', status: 'Connected', icon: 'crm' },
  { name: 'Email', description: 'Inbound & outbound email support', status: 'Connected', icon: 'email' },
  { name: 'Slack', description: 'Team notifications and handoffs', status: 'Disconnected', icon: 'slack' },
]
