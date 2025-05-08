import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('title, summary, slug, created_at')
    .order('created_at', { ascending: false })
    .limit(25)

  if (error) {
    return new Response('Failed to generate feed', { status: 500 })
  }

  const baseUrl = 'https://drn.today'
  const feedItems = posts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/post/${post.slug}</link>
      <description><![CDATA[${post.summary}]]></description>
      <pubDate>${new Date(post.created_at).toUTCString()}</pubDate>
      <guid>${baseUrl}/post/${post.slug}</guid>
    </item>
  `).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>DRN.today – Dynamic Reality Network</title>
      <link>${baseUrl}</link>
      <description>Live updates from DRN.today newsroom</description>
      ${feedItems}
    </channel>
  </rss>`

  return new NextResponse(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
