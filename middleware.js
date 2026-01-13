import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Ignore Next.js internals and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Redirect root to English
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return NextResponse.next();
}
