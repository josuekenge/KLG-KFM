import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { protocol, host } = request.nextUrl;

  // Security: Force HTTPS in production
  if (
    process.env.NODE_ENV === "production" &&
    protocol === "http:" &&
    !host.includes("localhost") &&
    !host.includes("127.0.0.1")
  ) {
    const httpsUrl = request.nextUrl.clone();
    httpsUrl.protocol = "https:";
    return NextResponse.redirect(httpsUrl, 301);
  }

  // Add security headers
  const response = NextResponse.next();

  // DNS Prefetch Control
  response.headers.set("X-DNS-Prefetch-Control", "on");

  // Prevent clickjacking
  response.headers.set("X-Frame-Options", "DENY");

  // XSS Protection
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Content Type Options
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Referrer Policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // HSTS (only in production with HTTPS)
  if (process.env.NODE_ENV === "production" && protocol === "https:") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (SEO - must be accessible to search engines)
     * - sitemap.xml (SEO - must be accessible to search engines)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
  ],
};

