import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Verify the webhook secret if needed
    const secret = request.headers.get('x-webhook-secret')
    if (secret && secret !== process.env.WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate the homepage and blog pages
    await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/`),
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/blog`),
    ])

    return NextResponse.json({ revalidated: true })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
