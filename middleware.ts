import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Detect lang from path for the x-lang header
  const lang = pathname.startsWith("/en") ? "en" : "nl";

  // On root path: redirect based on Accept-Language
  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const prefersEnglish =
      acceptLanguage.includes("en") && !acceptLanguage.startsWith("nl");
    const redirectLang = prefersEnglish ? "en" : "nl";
    return NextResponse.redirect(new URL(`/${redirectLang}`, request.url));
  }

  // Pass x-lang header so root layout can set <html lang>
  const response = NextResponse.next();
  response.headers.set("x-lang", lang);
  return response;
}

export const config = {
  matcher: ["/((?!_next|images|favicon.ico).*)"],
};
