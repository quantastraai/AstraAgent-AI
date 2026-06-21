import { ArrowRight, GitBranch, Zap } from 'lucide-react'

const STEPS = [
  { label: 'Lead captured', detail: 'Website form submitted' },
  { label: 'AI qualifies lead', detail: 'Intent & budget scored' },
  { label: 'CRM updated', detail: 'HubSpot record created' },
  { label: 'Follow-up sent', detail: 'WhatsApp message delivered' },
]

export function AutomationSection() {
  return (
    <section id="automation" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Automate every workflow
          </h2>
          <p className="mt-4 text-base text-white/50">
            Build no-code flows that connect your tools and run 24/7.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {STEPS.map(({ label, detail }, i) => (
            <div
              key={label}
              className="glass-card flex items-center gap-4 rounded-xl px-5 py-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/15">
                {i === STEPS.length - 1 ? (
                  <Zap className="h-4 w-4 text-[#D4AF37]" />
                ) : (
                  <GitBranch className="h-4 w-4 text-[#7C3AED]" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#F8FAFC]">{label}</p>
                <p className="text-xs text-white/45">{detail}</p>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 text-white/20 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
