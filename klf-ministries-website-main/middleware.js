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

  // Only run language detection on root
  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const prefersSpanish = acceptLanguage.toLowerCase().startsWith("es");

    const lang = prefersSpanish ? "es" : "en";
    return NextResponse.redirect(new URL(`/${lang}`, request.url));
  }

  return NextResponse.next();
}
