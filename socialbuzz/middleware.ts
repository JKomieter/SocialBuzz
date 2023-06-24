import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'
import { getToken } from 'next-auth/jwt';


export async function middleware(request: NextRequest) {
    // check if there is a session
    const session = await getSession();
    const token = await getToken({req: request})

    console.log(`Session ${session?.user} ${token?.email}`)

    // if ((!token) && request.nextUrl.pathname !== "/auth/login") {
    //     const url = request.nextUrl.clone()
    //     url.pathname = '/auth/login'
    //     return NextResponse.rewrite(url)
    // }

    return NextResponse.next()
}