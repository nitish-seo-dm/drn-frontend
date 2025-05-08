'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/storage/supabaseClient'

type UserProfile = {
  id: string
  email: string
  full_name: string
  avatar_url: string
  created_at: string
} | null

const UserContext = createContext<{
  profile: UserProfile
  loading: boolean
}>({
  profile: null,
  loading: true,
})

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: authData } = await supabase.auth.getUser()
      const userId = authData?.user?.id
      if (userId) {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', userId)
          .single()
        if (!error) setProfile(data)
      }
      setLoading(false)
    }

    fetchProfile()
  }, [])

  return (
    <UserContext.Provider value={{ profile, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}
