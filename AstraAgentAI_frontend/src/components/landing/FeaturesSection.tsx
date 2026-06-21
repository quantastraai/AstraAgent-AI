import { Bot, MessageSquare, Plug, Shield, TrendingUp, Zap } from 'lucide-react'

const FEATURES = [
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Deploy custom agents for support, sales, and operations in minutes.',
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel Chat',
    description: 'WhatsApp, Slack, web — one inbox for every conversation.',
  },
  {
    icon: Plug,
    title: 'Integrations',
    description: 'Connect CRM, e-commerce, and 20+ tools out of the box.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics',
    description: 'Track conversations, resolution rates, and ROI in real time.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 ready with encryption, SSO, and role-based access.',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Build no-code flows that route, escalate, and close tickets.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="pt-12 pb-20">
      <div className="mx-auto max-w-[1320px] px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Everything you need to scale with AI
          </h2>
          <p className="mt-4 text-base text-white/50">
            One platform for agents, automation, integrations, and analytics.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-6 transition-colors hover:border-white/[0.12]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C3AED]/15">
                <Icon className="h-5 w-5 text-[#7C3AED]" />
              </div>
              <h3 className="font-display mb-2 text-lg font-semibold text-[#F8FAFC]">{title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
