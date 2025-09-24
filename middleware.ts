// middleware.ts (if you use one)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Allow all routes for now - remove authentication for public pages
  return NextResponse.next();
}

// Only run for app routes (tweak as needed)
export const config = {
  matcher: ['/((?!_next|static|favicon.ico|robots.txt|sitemap.xml).*)'],
};
