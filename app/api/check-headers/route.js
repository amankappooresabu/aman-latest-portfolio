// app/api/check-headers/route.ts
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const headersList = await headers()
  const country = headersList.get('cloudfront-viewer-country')
  
  return Response.json({ 
    country: country || "Header not found",
    allHeaders: Object.fromEntries(headersList.entries())
  })
}