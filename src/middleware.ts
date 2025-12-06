import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const isAuthPage = request.nextUrl.pathname.startsWith("/login") || 
                     request.nextUrl.pathname.startsWith("/register")
  
  const isProtectedPage = request.nextUrl.pathname.startsWith("/dashboard") ||
                          request.nextUrl.pathname.startsWith("/snippets") ||
                          request.nextUrl.pathname.startsWith("/editor") ||
                          request.nextUrl.pathname.startsWith("/settings")

  // Se está tentando acessar página protegida sem login, redireciona para login
  if (isProtectedPage && !token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Se está logado e tentando acessar login/register, redireciona para dashboard
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/snippets/:path*",
    "/editor/:path*",
    "/settings/:path*",
    "/login",
    "/register",
  ],
}
