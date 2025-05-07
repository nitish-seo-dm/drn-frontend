'use client'

import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/storage/supabaseClient'
import { useState } from 'react'
import { UploadCloud, Send, CheckCircle } from 'lucide-react'

type FormData = {
  title: string
  category: string
  location: string
  summary: string
}

export default function SmartComposer() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setSuccess(false)

    const { error } = await supabase.from('posts').insert([
      {
        title: data.title,
        category: data.category,
        location: data.location,
        summary: data.summary,
      },
    ])

    setLoading(false)
    if (!error) {
      setSuccess(true)
      reset()
    } else {
      alert('❌ Failed to publish post: ' + error.message)
    }
  }

  return (
    <div className="glass-card space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-drn-blue">Smart Composer</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input placeholder="Post Title" {...register('title', { required: true })} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Category" {...register('category', { required: true })} />
          <Input placeholder="Location" {...register('location')} />
        </div>
        <Textarea placeholder="Write a brief summary..." {...register('summary')} />

        <div className="flex flex-col items-center justify-center border border-dashed border-white/20 rounded-xl p-8 bg-black/10 text-white/60 hover:border-drn-green hover:text-white transition">
          <UploadCloud className="w-8 h-8 mb-2" />
          <p>Media upload will go here</p>
        </div>

        <div className="flex gap-4">
          <Button type="submit" disabled={loading}>
            <Send className="w-4 h-4 mr-1" />
            {loading ? 'Publishing...' : 'Publish'}
          </Button>
          {success && (
            <div className="text-drn-green flex items-center gap-1 text-sm">
              <CheckCircle className="w-4 h-4" />
              Post published!
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
