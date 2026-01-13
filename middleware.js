import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Ignore Next.js internals & public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // If already has language, continue
  if (pathname.startsWith("/en") || pathname.startsWith("/es")) {
    return NextResponse.next();
  }

  // Detect browser language
  const lang =
    request.headers.get("accept-language")?.startsWith("es") ? "es" : "en";

  return NextResponse.redirect(new URL(`/${lang}`, request.url));
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
