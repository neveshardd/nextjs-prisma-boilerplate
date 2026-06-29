import { betterFetch } from "@better-fetch/fetch";
import { NextResponse, type NextRequest } from "next/server";

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/settings") || pathname.startsWith("/data-library") || pathname.startsWith("/help")) {
    const { data: session } = await betterFetch(
      "/api/auth/get-session",
      {
        baseURL: request.nextUrl.origin,
        headers: { cookie: request.headers.get("cookie") ?? "" },
      },
    );

    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
