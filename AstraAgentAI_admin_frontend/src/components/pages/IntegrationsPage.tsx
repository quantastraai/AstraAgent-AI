import { Mail, MessageCircle, Hash, Database } from 'lucide-react'
import { INTEGRATIONS } from '../../data/mockData'
import type { Integration, NavSection } from '../../types'

const ICON_MAP: Record<Integration['icon'], typeof MessageCircle> = {
  whatsapp: MessageCircle,
  email: Mail,
  crm: Database,
  slack: Hash,
}

function filterIntegrations(filter: NavSection) {
  if (filter === 'integrations-whatsapp') return INTEGRATIONS.filter((i) => i.icon === 'whatsapp')
  if (filter === 'integrations-email') return INTEGRATIONS.filter((i) => i.icon === 'email')
  if (filter === 'integrations-crm') return INTEGRATIONS.filter((i) => i.icon === 'crm')
  return INTEGRATIONS
}

interface IntegrationsPageProps {
  filter: NavSection
}

export function IntegrationsPage({ filter }: IntegrationsPageProps) {
  const integrations = filterIntegrations(filter)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {integrations.map((integration) => {
        const Icon = ICON_MAP[integration.icon]
        const connected = integration.status === 'Connected'

        return (
          <div
            key={integration.name}
            className="rounded-xl border border-[#262626] bg-[#111111] p-5 transition-colors hover:border-[#333]"
          >
            <div className="flex items-start justify-between">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  connected ? 'bg-[#7c3aed]/15 text-[#7c3aed]' : 'bg-[#262626] text-[#71717a]'
                }`}
              >
                <Icon size={20} />
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                  connected
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-zinc-500/15 text-zinc-400'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${connected ? 'bg-emerald-400' : 'bg-zinc-500'}`}
                />
                {integration.status}
              </span>
            </div>

            <h3 className="mt-4 font-display text-[15px] font-semibold text-white">
              {integration.name}
            </h3>
            <p className="mt-1 text-[12px] text-[#71717a]">{integration.description}</p>

            <button
              type="button"
              className={`mt-4 w-full rounded-lg py-2 text-[12px] font-medium transition-colors ${
                connected
                  ? 'border border-[#262626] bg-transparent text-[#a1a1aa] hover:text-white'
                  : 'bg-[#7c3aed] text-white hover:bg-[#6d28d9]'
              }`}
            >
              {connected ? 'Manage' : 'Connect'}
            </button>
          </div>
        )
      })}
    </div>
  )
}
