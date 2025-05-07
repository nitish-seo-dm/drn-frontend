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

  const baseClass = cn(
    'flex flex-col space-y-6',
    variant === 'desktop' &&
      'hidden md:flex w-64 h-screen sticky top-0 z-20 p-4 bg-glass-gradient backdrop-blur-xs border-r border-border shadow-sm text-foreground'
  )

  return (
    <aside className={baseClass}>
      <div className="text-xl font-bold text-drn-blue">DRN Newsroom</div>

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
    </aside>
  )
}
