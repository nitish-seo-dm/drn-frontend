'use client'

import { PenLine, Eye, DollarSign, Clock } from 'lucide-react'
import { useUserProfile } from '@/hooks/useUserProfile'

export default function NewsroomHome() {
  const { profile, loading } = useUserProfile()

  const displayName = profile?.full_name || 'Journalist'

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-drn-blue">
          {loading ? 'Loading...' : `Welcome, ${displayName}`}
        </h1>
        <p className="text-muted-foreground text-sm">
          Here’s your latest newsroom activity and stats.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard
          title="Total Posts"
          value="24"
          icon={<PenLine className="w-5 h-5 text-drn-blue" />}
        />
        <DashboardCard
          title="Total Views"
          value="12,450"
          icon={<Eye className="w-5 h-5 text-drn-green" />}
        />
        <DashboardCard
          title="Earnings"
          value="$830.00"
          icon={<DollarSign className="w-5 h-5 text-yellow-400" />}
        />
      </div>

      {/* Activity Feed */}
      <div className="bg-glass-gradient backdrop-blur-xs border border-border p-4 rounded-xl space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Published “AI & Global Policy” – 2 hours ago
          </li>
          <li className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Scheduled “Elections 2025 Insight” for tomorrow
          </li>
          <li className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Edited “Weather Crisis Report”
          </li>
        </ul>
      </div>
    </div>
  )
}

function DashboardCard({
  title,
  value,
  icon,
}: {
  title: string
  value: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-glass-gradient backdrop-blur-xs border border-border p-4 rounded-xl flex items-center justify-between shadow-sm">
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-xl font-bold text-foreground">{value}</p>
      </div>
      <div className="p-2 rounded-full bg-muted/20">{icon}</div>
    </div>
  )
}
