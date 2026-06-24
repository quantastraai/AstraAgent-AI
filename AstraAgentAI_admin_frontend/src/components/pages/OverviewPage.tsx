import { MessageSquare, Ticket, Users, Zap } from 'lucide-react'
import { OVERVIEW_STATS, RECENT_ACTIVITY, WEEKLY_CONVERSATIONS, CONVERSATIONS } from '../../data/mockData'

const ICONS = {
  messages: MessageSquare,
  ticket: Ticket,
  users: Users,
  zap: Zap,
}

function StatCard({
  label,
  value,
  icon,
  accent,
}: (typeof OVERVIEW_STATS)[number]) {
  const Icon = ICONS[icon]
  const isPurple = accent === 'purple'

  return (
    <div className="rounded-xl border border-[#262626] bg-[#111111] p-5 transition-colors hover:border-[#333]">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
            isPurple ? 'bg-[#7c3aed]/15 text-[#7c3aed]' : 'bg-[#d4af37]/15 text-[#d4af37]'
          }`}
        >
          <Icon size={18} />
        </div>
      </div>
      <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-[13px] text-[#a1a1aa]">{label}</p>
    </div>
  )
}

function ActivityPanel() {
  return (
    <div className="rounded-xl border border-[#262626] bg-[#111111] p-5">
      <h3 className="font-display text-sm font-semibold text-white">Recent Activity</h3>
      <ul className="mt-4 space-y-3">
        {RECENT_ACTIVITY.map((item) => (
          <li key={item.text} className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/15 text-[11px] text-[#7c3aed]">
              ✓
            </span>
            <span className="flex-1 text-[13px] text-[#e4e4e7]">{item.text}</span>
            <span className="text-[11px] text-[#71717a]">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ConversationChart() {
  const max = Math.max(...WEEKLY_CONVERSATIONS.map((d) => d.value))

  return (
    <div className="rounded-xl border border-[#262626] bg-[#111111] p-5">
      <h3 className="font-display text-sm font-semibold text-white">Conversations This Week</h3>
      <div className="mt-6 flex items-end justify-between gap-2" style={{ height: 140 }}>
        {WEEKLY_CONVERSATIONS.map((d) => {
          const height = (d.value / max) * 100
          return (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full flex-1 items-end">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-[#7c3aed] to-[#7c3aed]/60 transition-all"
                  style={{ height: `${height}%`, minHeight: 4 }}
                />
              </div>
              <span className="text-[11px] text-[#71717a]">{d.day}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Resolved: 'bg-emerald-500/15 text-emerald-400',
    Open: 'bg-blue-500/15 text-blue-400',
    'AI Handling': 'bg-[#7c3aed]/15 text-[#a78bfa]',
    'Human Handoff': 'bg-[#d4af37]/15 text-[#d4af37]',
  }
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ${colors[status] ?? 'bg-zinc-500/15 text-zinc-400'}`}>
      {status}
    </span>
  )
}

function RecentConversationsTable() {
  const rows = CONVERSATIONS.slice(0, 4)

  return (
    <div className="rounded-xl border border-[#262626] bg-[#111111]">
      <div className="border-b border-[#262626] px-5 py-4">
        <h3 className="font-display text-sm font-semibold text-white">Recent Conversations</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="border-b border-[#262626] text-[11px] uppercase tracking-wide text-[#71717a]">
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Channel</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-[#262626]/60 transition-colors hover:bg-[#1a1a1a]">
                <td className="px-5 py-3.5 font-medium text-white">{row.customer}</td>
                <td className="px-5 py-3.5 text-[#a1a1aa]">{row.channel}</td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-5 py-3.5 text-[#71717a]">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function OverviewPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {OVERVIEW_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <ActivityPanel />
        </div>
        <div className="lg:col-span-2">
          <ConversationChart />
        </div>
      </div>

      <RecentConversationsTable />
    </div>
  )
}
