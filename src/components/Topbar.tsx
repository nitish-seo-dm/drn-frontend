'use client'

import {
  Menu,
  Bell,
  UserCircle,
  LogOut,
  Settings,
  User,
  X,
} from 'lucide-react'
import LoginButton from '@/components/LoginButton'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import Sidebar from '@/components/Sidebar'
import GlassCard from '@/components/ui/GlassCard'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useUserContext } from '@/context/UserContext'

export default function Topbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { profile, loading } = useUserContext()

  return (
    <>
      <GlassCard className="sticky top-0 z-30 w-full h-16 flex items-center justify-between px-4 md:px-8 border-b border-border">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-muted-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">
            DRN Newsroom
          </h1>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          {!loading && profile?.full_name && (
            <span className={cn('text-sm text-muted-foreground', 'hidden md:inline-block')}>
              {profile.full_name}
            </span>
          )}

          <LoginButton />
          <Bell className="w-5 h-5 hover:text-foreground transition" />

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              {profile?.avatar_url && typeof profile.avatar_url === 'string' ? (
                <Image
                  src={profile.avatar_url}
                  alt="User avatar"
                  width={28}
                  height={28}
                  className="rounded-full border border-border object-cover"
                />
              ) : (
                <UserCircle
                  className="w-6 h-6 hover:text-foreground transition"
                  aria-label="User avatar fallback"
                />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel className="text-xs">
                {profile?.email || 'My Account'}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </GlassCard>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-50 w-64 p-4">
            <GlassCard className="h-full border-r border-border relative">
              <button
                className="absolute top-4 right-4 text-muted-foreground"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
              <Sidebar variant="mobile" />
            </GlassCard>
          </div>
        </div>
      )}
    </>
  )
}
