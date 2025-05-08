'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ShieldCheck, Users, Settings, FileText, Zap, Wrench } from 'lucide-react'

const adminLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: ShieldCheck },
  { href: '/admin/tools/Users', label: 'Users', icon: Users },
  { href: '/admin/tools/Moderation', label: 'Moderation', icon: Wrench },
  { href: '/admin/tools/Revenue', label: 'Revenue', icon: Zap },
  { href: '/admin/tools/LegalCompliance', label: 'Compliance', icon: FileText },
  { href: '/admin/tools/IntegrationHub', label: 'Integrations', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="h-screen p-4 bg-purple-950/30 backdrop-blur-lg border-r border-purple-900 text-[#F3E8FF] space-y-4">
      <h2 className="text-xl font-bold text-cyber-purple">Admin Panel</h2>
      <nav className="space-y-2">
        {adminLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm',
                isActive
                  ? 'bg-purple-700 text-white shadow-md'
                  : 'text-purple-200 hover:text-white hover:bg-purple-800/30'
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
