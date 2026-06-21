import { Database, MessageSquare, ShoppingBag, Users } from 'lucide-react'

const INTEGRATIONS = [
  { icon: MessageSquare, name: 'WhatsApp', category: 'Messaging' },
  { icon: Users, name: 'Slack', category: 'Team Chat' },
  { icon: Database, name: 'HubSpot CRM', category: 'CRM' },
  { icon: ShoppingBag, name: 'Shopify', category: 'E-commerce' },
  { icon: MessageSquare, name: 'Telegram', category: 'Messaging' },
  { icon: Database, name: 'Salesforce', category: 'CRM' },
]

export function IntegrationsSection() {
  return (
    <section id="integrations" className="border-t border-white/[0.06] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Connect your entire stack
          </h2>
          <p className="mt-4 text-base text-white/50">
            20+ integrations ready out of the box — no engineering required.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map(({ icon: Icon, name, category }) => (
            <div
              key={name}
              className="glass-card flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-white/[0.12]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04]">
                <Icon className="h-5 w-5 text-[#7C3AED]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F8FAFC]">{name}</p>
                <p className="text-xs text-white/45">{category}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/35">+ 20 more integrations available</p>
      </div>
    </section>
  )
}
