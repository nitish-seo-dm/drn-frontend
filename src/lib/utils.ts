// Combines class names conditionally
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Converts text to a URL-safe slug (e.g. for post titles)
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/-+/g, '-')         // Collapse dashes
}

// Formats a date to readable form (e.g. "Mar 5, 2025")
export function formatDate(date: string | number | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

// Strips potentially unsafe HTML (basic XSS defense)
export function sanitize(input: string): string {
  return input
    .replace(/<script.*?>.*?<\/script>/gi, '')
    .replace(/on\w+=".*?"/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/<[^>]+>/g, '') // Remove all tags
}

// Checks if a string is a valid URL
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Gets a short preview of content (used in summaries)
export function truncate(text: string, maxLength: number = 160): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}
