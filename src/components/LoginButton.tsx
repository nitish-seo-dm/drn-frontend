'use client'

import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/storage/supabaseClient'
import { LogIn } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function LoginButton() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setLoggedIn(!!session)
    })
  }, [])

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/newsroom`,
      },
    })
  }

  if (loggedIn) return null

  return (
    <Button onClick={login} className="flex gap-2 items-center">
      <LogIn className="w-4 h-4" />
      Sign in with Google
    </Button>
  )
}
