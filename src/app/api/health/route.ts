import { NextResponse } from 'next/server';

/**
 * Health check endpoint to verify SSL/HTTPS configuration
 * Returns status information about the deployment
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const protocol = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
  const host = request.headers.get('host') || url.host;
  
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    protocol: protocol,
    host: host,
    isSecure: protocol === 'https',
    url: `${protocol}://${host}`,
    headers: {
      'x-forwarded-proto': request.headers.get('x-forwarded-proto'),
      'x-forwarded-host': request.headers.get('x-forwarded-host'),
    }
  }, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Content-Type': 'application/json',
    }
  });
}

