import { useEffect, useState } from 'react'
import { supabase } from '@/lib/storage/supabaseClient'

export type UserProfile = {
  id: string
  email: string
  full_name: string
  avatar_url: string
  created_at: string
}

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProfile = async () => {
      const { data: authData } = await supabase.auth.getUser()
      const userId = authData?.user?.id

      if (userId) {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', userId)
          .single()
        if (!error && data) {
          setProfile(data as UserProfile)
        }
      }
      setLoading(false)
    }

    getProfile()
  }, [])

  return { profile, loading }
}
