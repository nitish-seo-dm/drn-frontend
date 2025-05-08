'use client'

import {
  Home,
  PenLine,
  Video,
  BarChart3,
  Calendar,
  Settings,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import GlassCard from '@/components/ui/GlassCard'

const navItems = [
  { label: 'Home', icon: Home, href: '/newsroom' },
  { label: 'Smart Composer', icon: PenLine, href: '/newsroom/tools/SmartComposer' },
  { label: 'Media Manager', icon: Video, href: '/newsroom/tools/MediaManager' },
  { label: 'Analytics', icon: BarChart3, href: '/newsroom/tools/AnalyticsDashboard' },
  { label: 'Calendar', icon: Calendar, href: '/newsroom/tools/ContentCalendar' },
  { label: 'Settings', icon: Settings, href: '/newsroom/settings' },
]

export default function Sidebar({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const pathname = usePathname()

  const containerClass = cn(
    'flex flex-col space-y-6 text-foreground',
    variant === 'desktop' && 'hidden md:flex w-64 h-screen sticky top-0 z-20'
  )

  return (
    <div className={containerClass}>
      <GlassCard className="h-full w-full p-4 border-r border-border">
        <div className="text-xl font-bold text-drn-blue mb-4">DRN Newsroom</div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/10'
                )}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </GlassCard>
    </div>
  )
}
