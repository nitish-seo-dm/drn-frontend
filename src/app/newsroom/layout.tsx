import type { ReactNode } from 'react'
import { UserProvider } from '@/context/UserContext'
import GlassCard from '@/components/ui/GlassCard'
export { metadata } from './metadata'

export default function NewsroomLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <UserProvider>
      <div className="min-h-screen p-4 md:p-8">
        <GlassCard className="max-w-7xl mx-auto p-4 md:p-6">
          {children}
        </GlassCard>
      </div>
    </UserProvider>
  )
}
