import type { Metadata } from 'next'

export function createMetadata({
  title = 'drn.today – Dynamic Reality Network',
  description = 'A futuristic decentralized newsroom built for independent journalists worldwide.',
  slug = '',
}: {
  title?: string
  description?: string
  slug?: string
}): Metadata {
  const url = `https://drn.today${slug}`

  return {
    title,
    description,
    metadataBase: new URL('https://drn.today'),
    openGraph: {
      title,
      description,
      url,
      siteName: 'drn.today',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@drntoday',
      creator: '@drntoday',
    },
    alternates: {
      canonical: url,
    },
  }
}
