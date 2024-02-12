export { default } from 'next-auth/middleware'
export const config = {
    matcher: ["/profiles", "/user", "/profile/:path*"]
}