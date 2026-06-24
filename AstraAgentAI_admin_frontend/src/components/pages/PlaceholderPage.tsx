import { BarChart3, Settings } from 'lucide-react'

interface PlaceholderPageProps {
  type: 'analytics' | 'settings'
}

export function PlaceholderPage({ type }: PlaceholderPageProps) {
  const isAnalytics = type === 'analytics'
  const Icon = isAnalytics ? BarChart3 : Settings

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#262626] bg-[#111111] py-24">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7c3aed]/15 text-[#7c3aed]">
        <Icon size={24} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-white">
        {isAnalytics ? 'Analytics' : 'Settings'}
      </h3>
      <p className="mt-2 max-w-sm text-center text-[13px] text-[#71717a]">
        {isAnalytics
          ? 'Advanced analytics and reporting will be available here soon.'
          : 'Configure your workspace, team, and AI agent preferences.'}
      </p>
    </div>
  )
}
