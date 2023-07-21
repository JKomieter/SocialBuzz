import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'


export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if (!token) {
        req.nextUrl.pathname = "/auth/login";
        return NextResponse.rewrite(req.url.toString())
    }

    return NextResponse.next()
}