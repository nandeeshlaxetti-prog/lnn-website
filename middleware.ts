// middleware.ts (if you use one)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const publicPaths = ['/', '/services', '/contact', '/blog', '/about', '/team', '/api/public'];
  const { pathname } = req.nextUrl;

  // allow all public paths
  if (publicPaths.some(p => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next();
  }

  // example auth check (pseudo)
  const isAuthed = req.cookies.get('session')?.value;
  if (!isAuthed) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Only run for app routes (tweak as needed)
export const config = {
  matcher: ['/((?!_next|static|favicon.ico|robots.txt|sitemap.xml).*)'],
};
