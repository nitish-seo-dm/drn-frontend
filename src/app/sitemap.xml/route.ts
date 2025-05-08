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
    .select('slug')
    .order('created_at', { ascending: false })

  if (error) {
    return new Response('Failed to generate sitemap', { status: 500 })
  }

  const baseUrl = 'https://drn.today'
  const staticRoutes = [`${baseUrl}/`, `${baseUrl}/newsroom`, `${baseUrl}/login`]

  const dynamicRoutes = posts.map((post) => `${baseUrl}/post/${post.slug}`)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...staticRoutes, ...dynamicRoutes].map((url) => `
      <url>
        <loc>${url}</loc>
        <priority>0.8</priority>
      </url>
    `).join('')}
  </urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
