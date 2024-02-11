import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers"

export async function GET(request: NextRequest){
    // option 1.)
    const requestHeaders = new Headers(request.headers)
    // option 2.)
    const headersList = headers()

    cookies().set('name', 'lee', { secure: true })
    cookies().set('pagePerRequest', '20')
    cookies().set({
        name: 'name',
        value: 'lee',
        httpOnly: true,
        path: '/',
        maxAge: 0,
        expires: Date.now() - 24*60*60*1000
      })

    cookies().delete('name')
    const theme = request.cookies.get("theme")

    return new Response("<h1>Hello World</h1>",{
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme/dark"
        },
    })

}

// Caching in Route Handlers
// Route Handlers are cached by default when using the GET method
// with the Response object in Next.js

//opt out of caching
// option 1.)
// using dynamic mode in Segment Config Option
// export const dynamic = "force-dynamic" (by default dynamic="auto" ==> this attemps to cache)
// option 2.)
// using the Request object with the GET method
// option 3.)
// Employing dynamic functions like headers() and cookies()
// option 4.)
// Using any HTTP method other than GET