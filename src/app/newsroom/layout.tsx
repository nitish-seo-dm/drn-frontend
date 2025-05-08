import type { ReactNode } from 'react'
import { UserProvider } from '@/context/UserContext'
export { metadata } from './metadata'

export default function NewsroomLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}
