import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isAuthPage =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";

  const isProtectedPage = request.nextUrl.pathname === "/"; // since your dashboard is "/"

  // ✅ If token exists and user is on login/register, redirect to "/"
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ✅ If no token and trying to access "/", redirect to login
  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register"], // include "/" because it's the dashboard
};
