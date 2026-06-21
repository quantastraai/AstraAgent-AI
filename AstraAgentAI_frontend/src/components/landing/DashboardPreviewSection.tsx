import { BarChart3, Bot, MessageSquare, Users } from 'lucide-react'

const STATS = [
  { icon: Bot, label: 'Active Agents', value: '18' },
  { icon: MessageSquare, label: 'Conversations', value: '24K' },
  { icon: Users, label: 'Leads Handled', value: '1.2K' },
  { icon: BarChart3, label: 'Resolution Rate', value: '94%' },
]

export function DashboardPreviewSection() {
  return (
    <section id="dashboard" className="border-t border-white/[0.06] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Your AI command center
          </h2>
          <p className="mt-4 text-base text-white/50">
            Monitor agents, conversations, and performance from one dashboard.
          </p>
        </div>

        <div className="glass-card mx-auto max-w-4xl rounded-2xl p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <span className="text-sm font-semibold text-[#F8FAFC]">Dashboard Overview</span>
            <span className="text-xs text-green-400">● All systems online</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <Icon className="mb-3 h-5 w-5 text-[#7C3AED]" />
                <p className="font-display text-2xl font-bold text-[#F8FAFC]">{value}</p>
                <p className="mt-1 text-xs text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
