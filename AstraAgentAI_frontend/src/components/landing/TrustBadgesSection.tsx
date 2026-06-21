import { Check } from 'lucide-react'

const BADGES = ['No Credit Card', 'Enterprise Ready', '24/7 Support']

export function TrustBadgesSection() {
  return (
    <section className="border-y border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-10 px-6 lg:px-8">
        {BADGES.map((label) => (
          <div key={label} className="flex items-center gap-2.5 text-sm text-white/55">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37]/12">
              <Check className="h-3.5 w-3.5 text-[#D4AF37]" />
            </span>
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}
