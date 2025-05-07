import type { ReactNode } from 'react'
export { metadata } from './metadata'

export default function NewsroomLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
