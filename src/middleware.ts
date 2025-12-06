export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/snippets/:path*",
    "/editor/:path*",
    "/settings/:path*",
  ],
}
