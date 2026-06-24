import { TICKETS } from '../../data/mockData'
import type { NavSection } from '../../types'

function PriorityBadge({ priority }: { priority: string }) {
  const colors: Record<string, string> = {
    Low: 'bg-zinc-500/15 text-zinc-400',
    Medium: 'bg-blue-500/15 text-blue-400',
    High: 'bg-orange-500/15 text-orange-400',
    Urgent: 'bg-red-500/15 text-red-400',
  }
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ${colors[priority] ?? ''}`}>
      {priority}
    </span>
  )
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Open: 'bg-[#d4af37]/15 text-[#d4af37]',
    'In Progress': 'bg-[#7c3aed]/15 text-[#a78bfa]',
    Resolved: 'bg-emerald-500/15 text-emerald-400',
  }
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ${colors[status] ?? ''}`}>
      {status}
    </span>
  )
}

function filterTickets(filter: NavSection) {
  if (filter === 'tickets-resolved') return TICKETS.filter((t) => t.status === 'Resolved')
  if (filter === 'tickets-open') return TICKETS.filter((t) => t.status !== 'Resolved')
  return TICKETS
}

interface TicketsPageProps {
  filter: NavSection
}

export function TicketsPage({ filter }: TicketsPageProps) {
  const tickets = filterTickets(filter)

  return (
    <div className="rounded-xl border border-[#262626] bg-[#111111]">
      <div className="flex items-center justify-between border-b border-[#262626] px-5 py-4">
        <div>
          <h3 className="font-display text-sm font-semibold text-white">
            {filter === 'tickets-resolved' ? 'Resolved Tickets' : filter === 'tickets-open' ? 'Open Tickets' : 'All Tickets'}
          </h3>
          <p className="mt-0.5 text-[12px] text-[#71717a]">{tickets.length} tickets</p>
        </div>
        <button
          type="button"
          className="rounded-lg bg-[#7c3aed] px-3 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-[#6d28d9]"
        >
          + New Ticket
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="border-b border-[#262626] text-[11px] uppercase tracking-wide text-[#71717a]">
              <th className="px-5 py-3 font-medium">Ticket ID</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Priority</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border-b border-[#262626]/60 transition-colors hover:bg-[#1a1a1a]">
                <td className="px-5 py-3.5 font-mono text-[#7c3aed]">{ticket.id}</td>
                <td className="px-5 py-3.5 font-medium text-white">{ticket.customer}</td>
                <td className="px-5 py-3.5">
                  <PriorityBadge priority={ticket.priority} />
                </td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={ticket.status} />
                </td>
                <td className="px-5 py-3.5 text-[#a1a1aa]">{ticket.assignedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
