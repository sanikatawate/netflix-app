// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest){
//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: ["/profile", "/add"]
// }

// export function middleware(request:NextRequest){
//     if(request.nextUrl.pathname ==="/profile"){
//         return NextResponse.redirect(new URL("/", request.url))
//     }
// }


//Serves hello page at /profile path
// export function middleware(request:NextRequest){
//     if(request.nextUrl.pathname ==="/profile"){
//         return NextResponse.rewrite(new URL("/hello", request.url))
//     }
// }

// Cookies and Headers in middlewares
// handle user preferences for themes + add custom headers for all responses
// export function middleware(request:NextRequest){
//     const response = NextResponse.next()

//     //get theme
//     const themePreferences = request.cookies.get("theme")
//     if (!themePreferences){
//         response.cookies.set("theme", "dark");
//     }

//     //set headers
//     response.headers.set("custom-header", "custom-value")

//     return response
// }