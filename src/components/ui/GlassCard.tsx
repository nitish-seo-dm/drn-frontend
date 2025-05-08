'use client'

import React from 'react'
import { cn } from '@/lib/utils'

type GlassCardProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function GlassCard({ children, className, style }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-4 border border-white/10 shadow-lg backdrop-blur-sm text-foreground',
        className
      )}
      style={{
        backgroundImage:
          'linear-gradient(to top left, rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
