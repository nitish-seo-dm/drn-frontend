import { supabase } from './supabaseClient'

export async function uploadMediaToSupabase(
  file: File,
  folder: string = 'uploads'
): Promise<string | null> {
  if (!file) return null

  const fileExt = file.name.split('.').pop()    
  const filePath = `${folder}/${Date.now()}.${fileExt}`

  const { error } = await supabase.storage.from('media').upload(filePath, file)

  if (error) {
    console.error('❌ Upload error:', error)
    return null
  }

  const { data } = supabase.storage.from('media').getPublicUrl(filePath)
  return data?.publicUrl || null
}
