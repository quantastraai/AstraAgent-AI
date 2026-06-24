import { LEADS } from '../../data/mockData'
import type { NavSection } from '../../types'

function SourceBadge({ source }: { source: string }) {
  const colors: Record<string, string> = {
    'Contact Form': 'bg-[#7c3aed]/15 text-[#a78bfa]',
    'Demo Booking': 'bg-[#d4af37]/15 text-[#d4af37]',
    'Chat Widget': 'bg-emerald-500/15 text-emerald-400',
  }
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ${colors[source] ?? ''}`}>
      {source}
    </span>
  )
}

function filterLeads(filter: NavSection) {
  if (filter === 'leads-demo') return LEADS.filter((l) => l.source === 'Demo Booking')
  return LEADS
}

interface LeadsPageProps {
  filter: NavSection
}

export function LeadsPage({ filter }: LeadsPageProps) {
  const leads = filterLeads(filter)

  return (
    <div className="rounded-xl border border-[#262626] bg-[#111111]">
      <div className="flex items-center justify-between border-b border-[#262626] px-5 py-4">
        <div>
          <h3 className="font-display text-sm font-semibold text-white">
            {filter === 'leads-demo' ? 'Demo Requests' : 'All Leads'}
          </h3>
          <p className="mt-0.5 text-[12px] text-[#71717a]">{leads.length} leads</p>
        </div>
        <button
          type="button"
          className="rounded-lg border border-[#262626] bg-[#0A0A0A] px-3 py-1.5 text-[12px] font-medium text-[#a1a1aa] transition-colors hover:text-white"
        >
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="border-b border-[#262626] text-[11px] uppercase tracking-wide text-[#71717a]">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Company</th>
              <th className="px-5 py-3 font-medium">Source</th>
              <th className="px-5 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.email} className="border-b border-[#262626]/60 transition-colors hover:bg-[#1a1a1a]">
                <td className="px-5 py-3.5 font-medium text-white">{lead.name}</td>
                <td className="px-5 py-3.5 text-[#a1a1aa]">{lead.email}</td>
                <td className="px-5 py-3.5 text-[#a1a1aa]">{lead.company}</td>
                <td className="px-5 py-3.5">
                  <SourceBadge source={lead.source} />
                </td>
                <td className="px-5 py-3.5 text-[#71717a]">{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
