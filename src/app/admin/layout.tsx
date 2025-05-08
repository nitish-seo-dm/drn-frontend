'use client'

import type { ReactNode } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import AdminSidebar from '@/app/admin/sidebar'
import Topbar from '@/components/Topbar'
import { cn } from '@/lib/utils'

export default function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className={cn('min-h-screen', 'bg-gradient-to-br from-[#1E0032] to-black text-[#F3E8FF]')}>
      <Topbar />
      <div className="flex">
        <aside className="w-64 hidden md:block">
          <AdminSidebar />
        </aside>
        <main className="flex-1 p-6 md:p-10">
          <GlassCard className="p-6 border border-purple-700/20 shadow-xl backdrop-blur-md">
            {children}
          </GlassCard>
        </main>
      </div>
    </div>
  )
}
